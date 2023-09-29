import React from "react";

import { NavBar } from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserProvider";

const NotFoundPage: React.FC = () => {
  const { logOut } = useUser()!;
  const navigate = useNavigate();

  const logOff = () => {
    logOut();
    navigate("/login");
  };

  return (
    <div className="bg-secundary text-opposite min-h-screen">
      <div className="flex justify-center w-full h-full">
        <div className="w-128 max-md:w-80">
          <div>
            <div className="mt-8 mx-8">
              <NavBar selected={"Profile"} />
            </div>
            <div className="container mx-auto py-8">
              <div>
                <h1 className="text-4xl font-bold">Página em construção</h1>
                <p className="text-lg mt-4">
                  A página que você acessou está em construção
                </p>
                  <button
                    className="text-black bg-white px-6 py-1 mt-8 rounded-full font-semibold max-md:w-60"
                    onClick={() => logOff()}
                  >
                    Sair da conta
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
