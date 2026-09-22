import { useOutletContext, useSearchParams } from "react-router-dom";
import { AdminApplicationsManager } from "@/features/applications/components/AdminApplicationsManager/AdminApplicationsManager";
import { AdminLoanApplicationsManager } from "@/features/applications/components/AdminLoanApplicationsManager/AdminLoanApplicationsManager";
import type { AdminOutletContext } from "@/layouts/AdminLayout/AdminLayout";
import pageStyles from "@/styles/admin/AdminPage.module.css";
import styles from "@/styles/admin/ManagerApplicationsPage.module.css";

export function ManagerApplicationsPage() {
  const { showToast } = useOutletContext<AdminOutletContext>();
  const [searchParams, setSearchParams] = useSearchParams();
  const applicationType =
    searchParams.get("type") === "loan" ? "loan" : "membership";
  const selectApplicationType = (type: "membership" | "loan") => {
    setSearchParams(type === "loan" ? { type: "loan" } : {}, { replace: true });
  };

  return (
    <div className={pageStyles.content}>
      <div className={pageStyles.welcome}>
        <div>
          <p className="eyebrow">Easy Apply</p>
          <h1>Application records</h1>
          <p>
            Review private membership and loan submissions, verify applicant
            information, and record cooperative decisions.
          </p>
        </div>
      </div>
      <div className={styles.tabs} role="tablist" aria-label="Application type">
        <button
          type="button"
          role="tab"
          aria-selected={applicationType === "membership"}
          className={
            applicationType === "membership" ? styles.active : undefined
          }
          onClick={() => selectApplicationType("membership")}
        >
          Membership applications
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={applicationType === "loan"}
          className={applicationType === "loan" ? styles.active : undefined}
          onClick={() => selectApplicationType("loan")}
        >
          Loan applications
        </button>
      </div>
      <div role="tabpanel">
        {applicationType === "membership" ? (
          <AdminApplicationsManager showToast={showToast} />
        ) : (
          <AdminLoanApplicationsManager showToast={showToast} />
        )}
      </div>
    </div>
  );
}
