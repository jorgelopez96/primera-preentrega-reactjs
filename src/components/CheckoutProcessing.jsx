import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutProcessing = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/checkout-success", { state });
    }, 2200);

    return () => clearTimeout(timer);
  }, [navigate, state]);

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "70vh" }}
    >
      <div className="text-center">
        <div className="checkout-success-wrap mx-auto mb-4">
          <div className="checkout-success-ring"></div>

          <div className="checkout-success-icon">
            <svg
              className="checkout-check"
              viewBox="0 0 52 52"
              width="90"
              height="90"
            >
              <circle
                className="checkout-check-circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkout-check-mark"
                fill="none"
                d="M14 27l7 7 17-17"
              />
            </svg>
          </div>
        </div>

        <h1 className="fw-bold mb-2">¡Compra realizada con éxito!</h1>

        <p className="text-muted fs-5 mb-4">
          Estamos preparando el resumen de tu compra
        </p>

        <div className="checkout-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <style>{`
        .checkout-success-wrap {
          position: relative;
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .checkout-success-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(25, 135, 84, 0.15) 0%,
            rgba(25, 135, 84, 0.05) 45%,
            rgba(25, 135, 84, 0) 70%
          );
          animation: pulseRing 1.8s ease-in-out infinite;
        }

        .checkout-success-icon {
          position: relative;
          z-index: 1;
          animation: bounceInSoft 0.9s ease;
          filter: drop-shadow(0 10px 18px rgba(25, 135, 84, 0.18));
        }

        .checkout-check {
          display: block;
        }

        .checkout-check-circle {
          stroke: #198754;
          stroke-width: 3;
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
          animation: drawCircle 0.6s ease forwards;
        }

        .checkout-check-mark {
          stroke: #198754;
          stroke-width: 4;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: drawCheck 0.4s ease forwards;
          animation-delay: 0.6s;
        }

        .checkout-dots {
          display: inline-flex;
          gap: 8px;
          align-items: center;
          justify-content: center;
        }

        .checkout-dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #198754;
          opacity: 0.25;
          animation: dotPulse 1.2s infinite ease-in-out;
        }

        .checkout-dots span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .checkout-dots span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes bounceInSoft {
          0% {
            transform: scale(0.55) translateY(8px);
            opacity: 0;
          }
          60% {
            transform: scale(1.08) translateY(-4px);
            opacity: 1;
          }
          100% {
            transform: scale(1) translateY(0);
          }
        }

        @keyframes pulseRing {
          0% {
            transform: scale(0.9);
            opacity: 0.7;
          }
          70% {
            transform: scale(1.12);
            opacity: 0.15;
          }
          100% {
            transform: scale(1.18);
            opacity: 0;
          }
        }

        @keyframes dotPulse {
          0%, 80%, 100% {
            transform: scale(0.8);
            opacity: 0.25;
          }
          40% {
            transform: scale(1.15);
            opacity: 1;
          }
        }

        @keyframes drawCircle {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes drawCheck {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CheckoutProcessing;
