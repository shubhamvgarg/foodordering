import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button"

const MainNav = () => {
  return (
    <Button 
      variant="ghost"
      className="font-bold hover:text-orange-500 hover:bg-white"
      onClick={async ()=> await loginWithRedirect()}>
      LogIn
    </Button>
  )
}

export default MainNav
