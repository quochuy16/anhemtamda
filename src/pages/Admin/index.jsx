import VideoManager from "../../components/VideoManager";
import PageMeta from "../../components/PageMeta";
import "./Admin.css"; // Import file CSS riêng

export default function Admin() {
  return (
    <>
      <PageMeta title="Anh Em Tam Đa" description="" />
      <div className="admin-container">
        <div className="admin-content">
          <VideoManager />
        </div>
      </div>
    </>
  );
}
