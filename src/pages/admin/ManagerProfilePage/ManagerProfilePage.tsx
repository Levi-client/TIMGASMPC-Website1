import { useOutletContext } from "react-router-dom";
import { AdminProfileManager } from "@/features/profile/components/AdminProfileManager/AdminProfileManager";
import type { AdminOutletContext } from "@/layouts/AdminLayout/AdminLayout";
import styles from "@/styles/admin/AdminPage.module.css";

export function ManagerProfilePage() {
  const { onProfileChange, showToast } =
    useOutletContext<AdminOutletContext>();

  return (
    <div className={styles.content}>
      <div className={styles.welcome}>
        <div>
          <p className="eyebrow">Account settings</p>
          <h1>Manager profile</h1>
          <p>
            Manage the personal information used to identify the signed-in
            TIMGAS MPC administrator.
          </p>
        </div>
      </div>
      <AdminProfileManager
        onProfileChange={onProfileChange}
        showToast={showToast}
      />
    </div>
  );
}
