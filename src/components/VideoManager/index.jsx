import { useEffect, useState } from "react";
import { useTheme } from "../ThemeContext";
import axios from "axios";
import clsx from "clsx";
import { Trash2, Plus, X } from "lucide-react";
import "./VideoManager.css"; // Import file CSS

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

export default function VideoManager() {
  const [showPopup, setShowPopup] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
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
        setTableData(response.data.data);
      } catch (error) {
        setError("Không thể tải dữ liệu. Vui lòng thử lại!");
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  const handleDelete = async (videoUrl) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa video này?")) return;
    try {
      await axios.post("https://huy-7xbr.onrender.com/api/v1/delete-video", { url: videoUrl });
      setTableData((prev) => prev.filter((video) => video.url !== videoUrl));
    } catch (error) {
      alert("Xóa video thất bại. Vui lòng thử lại!");
    }
  };

  const handleSave = async () => {
    if (!videoUrl.trim()) {
      alert("Vui lòng nhập URL video!");
      return;
    }
    try {
      await axios.post("https://huy-7xbr.onrender.com/api/v1/add-video", { url: videoUrl });
      setTableData([...tableData, { id: Date.now().toString(), url: videoUrl }]);
      setShowPopup(false);
      setVideoUrl("");
    } catch (error) {
      alert("Lỗi kết nối đến server!");
    }
  };

  return (
    <div className="video-manager">
      <div className="video-manager-header">
        <h3 className="video-title">TikTok Videos ({tableData.length})</h3>
        <div className="video-actions">
          <button onClick={() => setShowPopup(true)} className="btn-add">
            <Plus size={20} />
          </button>
          <button onClick={() => setTableData([])} className="btn-delete-all">
            <Trash2 size={20} />
          </button>
        </div>
      </div>

      {loading ? (
        <p className="loading-text">Đang tải dữ liệu...</p>
      ) : error ? (
        <p className="error-text">{error}</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell isHeader>STT</TableCell>
              <TableCell isHeader>Icon</TableCell>
              <TableCell isHeader>Link</TableCell>
              <TableCell isHeader>Delete</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.slice().reverse().map((video, index) => (
              <TableRow key={video.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <img src="/images/logo/icon_tiktok.png" alt="Thumbnail" className="video-icon" />
                </TableCell>
                <TableCell>
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className="video-link">
                    Xem Video
                  </a>
                </TableCell>
                <TableCell>
                  <button onClick={() => handleDelete(video.url)} className="btn-delete">
                    <Trash2 size={20} />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="popup-header">
              <h2>Thêm Video</h2>
              <button onClick={() => setShowPopup(false)} className="popup-close">
                <X size={20} />
              </button>
            </div>
            <input
              type="text"
              className="popup-input"
              placeholder="Nhập URL video"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
            <div className="popup-actions">
              <button onClick={() => setShowPopup(false)} className="btn-cancel">Hủy</button>
              <button onClick={handleSave} className="btn-save">Lưu</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
