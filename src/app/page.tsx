import styles from "./page.module.css";
import BasicTable from "@/components/table";
import { getUsers } from "./actions";
import Link from "next/link";

export default async function Home() {
  const users = await getUsers();
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Prisma + Nextjs + API</h1>
        <br />
        <BasicTable users={users} />
        <div style={{ display: "flex", width: "100%", marginTop: "20px" }}>
          <Link href={"/createUser"}>
            <button>Create User</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
