import RecentOrders from "../../components/RecentOrders";
import PageMeta from "../../components/PageMeta";
import "./Home.css"; // Import file CSS riêng

export default function Home() {
  return (
    <>
      <PageMeta title="Anh Em Tam Đa" description="" />
      <div className="container">
        <div className="recent-orders">
          <RecentOrders />
        </div>
      </div>
    </>
  );
}
