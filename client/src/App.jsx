import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="relative">

      {/* APP ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* WHATSAPP FLOATING ICON (hidden on 404 page) */}
      {window.location.pathname !== "/404" && (
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noreferrer"
          className="fixed right-6 bottom-6 z-50"
        >
          <div
            className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center"
            style={{ background: "#25D366" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M20.52 3.48A11.72 11.72 0 0012 .5 11.72 11.72 0 003.48 3.48 11.72 11.72 0 00.5 12c0 2.1.56 4.1 1.62 5.86L0 24l6.5-2.1A11.5 11.5 0 0012 23.5c6.28 0 11.5-5.22 11.5-11.5 0-3.09-1.2-6.01-3.0-8.52zM12 21c-1.7 0-3.36-.44-4.8-1.28l-.35-.21-3.86 1.25 1.29-3.75-.22-.36A8.5 8.5 0 013.5 12 8.5 8.5 0 1112 20.98z" />
              <path d="M17.56 14.03c-.29-.15-1.72-.85-1.98-.94s-.47-.15-.67.15-.77.94-.95 1.13c-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.62-1.5-.85-2.06-.22-.54-.45-.47-.63-.48-.16-.01-.36-.01-.55-.01-.19 0-.5.07-.77.37-.27.29-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.11 3.22 5.12 4.52 3.01 1.3 3.01.87 3.56.81.56-.07 1.82-.74 2.08-1.46.26-.72.26-1.34.18-1.46-.08-.12-.29-.2-.58-.35z" />
            </svg>
          </div>
        </a>
      )}
    </div>
  );
};

export default App;
