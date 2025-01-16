// import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { auth } from "@/auth";

// export default function Home() {
//   return (
//     <section className="text-center py-10">
//       <h1 className="text-3xl font-bold">Welcome to Fake Store</h1>
//       <p className="text-gray-600 mt-4">Explore the best products at amazing prices!</p>
//     </section>
//   );
// }

const Dashboard = async () => {
  const session = await auth();
  console.log(session);

  if (!session) {
    return <div>لطفاً ابتدا وارد شوید.</div>;
  }

  return <div>خوش آمدید، {session.user?.email}</div>;
};

export default Dashboard;

