import { useEffect, useState } from "react";
import { useTheme } from "../ThemeContext";
import axios from "axios";
import "./RecentOrders.css"; // Import file CSS

export default function RecentOrders() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get("https://huy-7xbr.onrender.com/api/v1/get-video");
        const videos = response.data.data.map((item, index) => ({
          id: item.id,
          url: item.url,
        }));

        setTableData(videos);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu TikTok:", error);
        setError("Không thể tải dữ liệu. Vui lòng thử lại!");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className={`recent-orders ${theme}`}>
      <h3 className="title">TikTok Videos ({tableData.length})</h3>

      {loading ? (
        <p className="loading-text">Đang tải dữ liệu...</p>
      ) : error ? (
        <p className="error-text">{error}</p>
      ) : (
        <div className="table-container">
          <table className="video-table ">
            <thead>
              <tr>
                <th>STT</th>
                <th>Icon</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {tableData.slice().reverse().map((video, index) => (
                <tr key={video.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src="/images/logo/icon_tiktok.png"
                      alt="Thumbnail"
                      className="video-icon"
                    />
                  </td>
                  <td>
                    <a href={video.url} target="_blank" rel="noopener noreferrer" className="video-link">
                      Xem Video
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
