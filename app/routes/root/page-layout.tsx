import { redirect, useNavigate } from 'react-router';
import { logoutUser } from '~/appwrite/auth';
import { account } from '~/appwrite/client';

export async function clientLoader() {
  try {
    const user = await account.get();

    if (!user.$id) return redirect('/sign-in');
  } catch (e) {
    return redirect('/sign-in');
  }
}

const PageLayout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate('/sign-in');
  };
  return (
    <div>
      <button onClick={handleLogout} className="cursor-pointer">
        <img
          src="/assets/icons/logout.svg"
          alt="logout button"
          className="size-6"
        />
      </button>

      <button
        onClick={() => {
          navigate('/dashboard');
        }}
      >
        Dashboard
      </button>
    </div>
  );
};

export default PageLayout;
