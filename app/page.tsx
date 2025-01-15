import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// export default function Home() {
//   return (
//     <section className="text-center py-10">
//       <h1 className="text-3xl font-bold">Welcome to Fake Store</h1>
//       <p className="text-gray-600 mt-4">Explore the best products at amazing prices!</p>
//     </section>
//   );
// }


const ProtectedPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <div>برای دسترسی، لطفاً وارد شوید.</div>;
  }

  return <div>این یک صفحه محافظت‌شده است!</div>;
};

export default ProtectedPage;
