import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import logoutIcon from "../../images/logout.svg";
import Spinner from "../../ui/Spinner";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <button disabled={isLoading} onClick={logout}>
      {!isLoading ? (
        <img src={logoutIcon} alt="" className="h-8" />
      ) : (
        <Spinner />
      )}
    </button>
  );
}

export default Logout;
