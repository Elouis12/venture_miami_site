import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useTime } from "framer-motion";


const PreLoader = (props) => {
  const transition = { duration: 1, ease: "easeInOut" };

  return (
    <>
        <div className="relative">
          <motion.div
            className="slide-out"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 0 }}
            transition={{ delay: 4, duration: 2.5, ease: "easeInOut" }}
          >
            <motion.div
              className="h-screen w-screen flex items-center justify-center"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 2.75 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:block" width="885" height="106">
                <motion.path
                  d="M855.519.588c-2.329 0-4.217 1.895-4.217 4.24v95.924c0 2.345 1.888 4.24 4.217 4.24 2.334 0 4.217-1.895 4.217-4.24V4.828c0-2.345-1.883-4.24-4.217-4.24ZM882.845 1.095a4.171 4.171 0 0 0-4.102 0 3.972 3.972 0 0 0-1.547 1.554 4.228 4.228 0 0 0-.566 2.11c0 .746.191 1.428.553 2.078.362.667.884 1.174 1.547 1.555a4.268 4.268 0 0 0 2.082.555c.725 0 1.419-.19 2.082-.555.663-.365 1.167-.888 1.547-1.555.363-.666.553-1.364.553-2.078 0-.714-.19-1.427-.571-2.11a4.009 4.009 0 0 0-1.547-1.554M701.353 3.302a4.2 4.2 0 0 0-3.926-2.714 4.213 4.213 0 0 0-3.929 2.698L656.504 99.21a4.251 4.251 0 0 0 2.414 5.493c2.17.851 4.615-.241 5.459-2.425l13.738-35.605a2.209 2.209 0 0 1 2.06-1.429h24.422c2.334 0 4.217-1.895 4.217-4.24 0-2.344-1.883-4.24-4.217-4.24h-19.44a2.215 2.215 0 0 1-2.202-2.216c0-.273.049-.514.129-.755l12.279-31.846a2.207 2.207 0 0 1 2.078-1.461c.959 0 1.759.61 2.077 1.445l30.969 80.363a4.22 4.22 0 0 0 3.93 2.714c.512 0 1.025-.096 1.52-.289a4.252 4.252 0 0 0 2.409-5.493L701.353 3.302ZM827.601.668a4.231 4.231 0 0 0-4.712 2.634l-31.018 80.443a2.204 2.204 0 0 1-2.029 1.365c-.91 0-1.759-.594-2.059-1.446L756.796 3.302c-.738-1.895-2.718-3.02-4.712-2.634-1.998.37-3.434 2.12-3.434 4.176v95.908c0 2.345 1.883 4.24 4.217 4.24 2.329 0 4.217-1.895 4.217-4.24v-61.38a2.1 2.1 0 0 1 .11-.723 2.218 2.218 0 0 1 2.091-1.493c.977 0 1.759.61 2.077 1.46l24.551 63.678a4.205 4.205 0 0 0 3.929 2.714 4.205 4.205 0 0 0 3.93-2.714l24.533-63.645a2.217 2.217 0 0 1 2.091-1.493c1.215 0 2.205.995 2.205 2.216v61.38c0 2.345 1.883 4.24 4.217 4.24 2.334 0 4.217-1.895 4.217-4.24V4.828c0-2.04-1.454-3.79-3.452-4.176M639.221.588c-2.329 0-4.217 1.895-4.217 4.24v95.924c0 2.345 1.888 4.24 4.217 4.24 2.334 0 4.217-1.895 4.217-4.24V4.828c0-2.345-1.883-4.24-4.217-4.24ZM611.32.668a4.232 4.232 0 0 0-4.712 2.634l-31.021 80.443a2.205 2.205 0 0 1-2.029 1.365 2.247 2.247 0 0 1-2.073-1.446L540.498 3.302c-.738-1.895-2.718-3.02-4.712-2.634a4.23 4.23 0 0 0-3.434 4.176v95.908c0 2.345 1.883 4.24 4.217 4.24 2.329 0 4.217-1.895 4.217-4.24v-61.38a2.1 2.1 0 0 1 .11-.723 2.217 2.217 0 0 1 2.091-1.493c.977 0 1.772.61 2.077 1.46l24.551 63.678a4.205 4.205 0 0 0 3.929 2.714 4.205 4.205 0 0 0 3.93-2.714l24.533-63.645a2.216 2.216 0 0 1 2.09-1.493c1.216 0 2.206.995 2.206 2.216v61.38c0 2.345 1.883 4.24 4.217 4.24 2.33 0 4.217-1.895 4.217-4.24V4.828c0-2.04-1.454-3.79-3.452-4.176M99.146 48.526c-2.332 0-4.216 1.895-4.216 4.24 0 2.344 1.884 4.24 4.216 4.24h23.352c2.332 0 4.217-1.896 4.217-4.24 0-2.345-1.885-4.24-4.217-4.24H99.146ZM321.354 104.976c17.395 0 31.546-14.229 31.546-31.718V4.812c0-2.345-1.884-4.24-4.217-4.24-2.331 0-4.216 1.895-4.216 4.24v68.446c0 12.815-10.366 23.238-23.113 23.238-12.745 0-23.111-10.423-23.111-23.238V4.812c0-2.345-1.885-4.24-4.217-4.24s-4.217 1.895-4.217 4.24v68.446c0 17.49 14.152 31.718 31.545 31.718ZM384.542 60.603a2.23 2.23 0 0 1-.464-1.365c0-1.22.991-2.217 2.205-2.217 15.462-.016 28.029-12.67 28.029-28.217 0-15.545-12.584-28.248-28.061-28.248h-20.685c-2.331 0-4.216 1.895-4.216 4.24 0 2.344 1.885 4.24 4.216 4.24h20.685c10.831 0 19.632 8.848 19.632 19.736 0 10.889-8.801 19.738-19.632 19.738h-13.066a4.19 4.19 0 0 0-3.785 2.377 4.268 4.268 0 0 0 .463 4.464l36.975 47.955a4.229 4.229 0 0 0 5.927.754c1.835-1.429 2.171-4.095.752-5.942l-28.944-37.547-.031.032Z"
                  fill="transparent"
                  strokeWidth="1"
                  stroke="#fff"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={transition}
                />
                <motion.path
                  d="M85.57 104.976h42.215c2.332 0 4.217-1.895 4.217-4.24 0-1.028-.368-1.96-.959-2.698a4.206 4.206 0 0 0-3.258-1.542H93.508a4.237 4.237 0 0 1-3.738-4.16V13.212a4.223 4.223 0 0 1 3.738-4.16h34.277a4.205 4.205 0 0 0 3.258-1.542 4.21 4.21 0 0 0 .959-2.697c0-2.345-1.885-4.24-4.217-4.24H85.57c-2.332 0-4.217 1.895-4.217 4.24v95.924c0 2.345 1.885 4.24 4.217 4.24ZM281.376 4.812c0-2.345-1.885-4.24-4.217-4.24h-57.788c-2.332 0-4.217 1.895-4.217 4.24 0 2.344 1.885 4.24 4.217 4.24h21.307c1.214 0 2.204.995 2.204 2.216v89.934c0 2.087 1.885 3.774 4.217 3.774s4.216-1.687 4.216-3.774V11.268c0-1.221.991-2.217 2.205-2.217h23.639c2.332 0 4.217-1.895 4.217-4.24ZM202.504.556c-2.332 0-4.217 1.895-4.217 4.24V76.47c0 1.22-.99 2.216-2.204 2.216-.83 0-1.566-.466-1.933-1.156L151.504 2.708A4.223 4.223 0 0 0 146.76.716a4.238 4.238 0 0 0-3.131 4.096v95.924c0 2.345 1.885 4.24 4.217 4.24s4.217-1.895 4.217-4.24V29.094c0-1.22.99-2.217 2.22-2.217.815 0 1.518.434 1.901 1.092l42.678 74.887a4.202 4.202 0 0 0 4.744 1.991 4.223 4.223 0 0 0 3.13-4.095V4.812c0-2.345-1.884-4.24-4.216-4.24M70.028.78c-2.204-.738-4.6.466-5.334 2.682L39.026 81.047a2.216 2.216 0 0 1-2.092 1.493 2.216 2.216 0 0 1-1.742-.85 2.365 2.365 0 0 1-.335-.627L9.19 3.463A4.207 4.207 0 0 0 3.855.78a4.236 4.236 0 0 0-2.668 5.348l31.753 96.005a4.228 4.228 0 0 0 4.01 2.907 4.193 4.193 0 0 0 3.993-2.907L72.696 6.128c.735-2.216-.463-4.625-2.668-5.364M442.01 48.526c-2.33 0-4.217 1.895-4.217 4.24 0 2.344 1.887 4.24 4.217 4.24h23.352c2.334 0 4.217-1.896 4.217-4.24 0-2.345-1.883-4.24-4.217-4.24H442.01Z"
                  fill="transparent"
                  strokeWidth="1"
                  stroke="#fff"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={transition}
                />
                <motion.path
                  d="M428.418 104.976h42.213c2.334 0 4.217-1.895 4.217-4.24 0-1.028-.367-1.96-.955-2.698a4.188 4.188 0 0 0-3.262-1.542h-34.275c-2.09-.24-3.704-2.007-3.739-4.16V13.212a4.227 4.227 0 0 1 3.739-4.16h34.275a4.213 4.213 0 0 0 4.217-4.24c0-2.344-1.883-4.24-4.217-4.24h-42.213c-2.33 0-4.217 1.896-4.217 4.24v95.925c0 2.345 1.887 4.24 4.217 4.24Z"
                  fill="transparent"
                  strokeWidth="1"
                  stroke="#fff"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={transition}
                />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="md:hidden" width="322" height="38">
                <motion.path
                  d="M310.742.012c-.847 0-1.533.689-1.533 1.541v34.882c0 .852.686 1.542 1.533 1.542.849 0 1.534-.69 1.534-1.542V1.553c0-.852-.685-1.541-1.534-1.541ZM320.679.196a1.517 1.517 0 0 0-1.492 0 1.446 1.446 0 0 0-.562.565 1.531 1.531 0 0 0-.005 1.523c.132.243.321.427.563.566.241.132.493.201.757.201.263 0 .516-.069.757-.201.241-.133.424-.323.562-.566.132-.242.201-.496.201-.755 0-.26-.069-.52-.207-.768a1.466 1.466 0 0 0-.563-.565M254.682.999a1.526 1.526 0 0 0-1.427-.987c-.633 0-1.202.39-1.429.98l-13.452 34.882a1.546 1.546 0 0 0 .877 1.997c.79.31 1.679-.087 1.986-.881l4.995-12.947a.803.803 0 0 1 .749-.52h8.881c.849 0 1.533-.69 1.533-1.542 0-.852-.684-1.542-1.533-1.542h-7.069a.805.805 0 0 1-.754-1.08l4.465-11.58a.803.803 0 0 1 1.511-.006l11.261 29.222c.24.614.814.987 1.429.987a1.546 1.546 0 0 0 1.429-2.102L254.682.999ZM300.59.04a1.539 1.539 0 0 0-1.713.959L287.598 30.25a.802.802 0 0 1-.738.497.804.804 0 0 1-.749-.526L274.843 1A1.534 1.534 0 0 0 273.13.04a1.533 1.533 0 0 0-1.249 1.518v34.876c0 .852.685 1.542 1.533 1.542.847 0 1.534-.69 1.534-1.542v-22.32c0-.094.011-.187.04-.263a.806.806 0 0 1 .76-.543.8.8 0 0 1 .756.531l8.927 23.155a1.53 1.53 0 0 0 2.858 0l8.921-23.143a.806.806 0 0 1 .76-.543c.442 0 .802.362.802.806v22.32c0 .852.685 1.542 1.534 1.542.848 0 1.533-.69 1.533-1.542V1.553c0-.741-.529-1.378-1.255-1.518M232.089.012c-.847 0-1.533.689-1.533 1.541v34.882c0 .852.686 1.542 1.533 1.542.849 0 1.534-.69 1.534-1.542V1.553c0-.852-.685-1.541-1.534-1.541ZM221.943.04A1.539 1.539 0 0 0 220.23 1L208.949 30.25a.8.8 0 0 1-.737.497.818.818 0 0 1-.754-.526L196.19 1a1.534 1.534 0 0 0-1.713-.958c-.727.14-1.249.77-1.249 1.518v34.876c0 .852.685 1.542 1.533 1.542.847 0 1.534-.69 1.534-1.542v-22.32c0-.094.011-.187.04-.263a.806.806 0 0 1 .76-.543c.355 0 .645.222.756.531l8.927 23.155a1.53 1.53 0 0 0 2.858 0l8.921-23.143a.806.806 0 0 1 .76-.543c.442 0 .802.362.802.806v22.32c0 .852.685 1.542 1.533 1.542.848 0 1.534-.69 1.534-1.542V1.553c0-.741-.529-1.378-1.255-1.518M35.7 17.444c-.848 0-1.534.689-1.534 1.541 0 .853.686 1.542 1.534 1.542h8.491c.848 0 1.534-.69 1.534-1.542 0-.852-.686-1.541-1.534-1.541H35.7ZM116.502 37.97c6.325 0 11.471-5.173 11.471-11.533V1.547c0-.852-.685-1.541-1.533-1.541-.848 0-1.533.689-1.533 1.542v24.889c0 4.66-3.77 8.45-8.405 8.45s-8.404-3.79-8.404-8.45V1.547c0-.852-.685-1.541-1.533-1.541-.848 0-1.534.689-1.534 1.542v24.889c0 6.36 5.146 11.534 11.471 11.534ZM139.479 21.835a.815.815 0 0 1-.168-.496c0-.444.36-.806.801-.806 5.623-.006 10.193-4.608 10.193-10.26C150.305 4.618 145.729 0 140.101 0h-7.522c-.848 0-1.533.69-1.533 1.542 0 .852.685 1.541 1.533 1.541h7.522c3.938 0 7.138 3.218 7.138 7.178 0 3.959-3.2 7.177-7.138 7.177h-4.752c-.586 0-1.12.333-1.376.864a1.551 1.551 0 0 0 .169 1.623l13.445 17.438a1.538 1.538 0 0 0 2.155.274 1.55 1.55 0 0 0 .273-2.16l-10.524-13.653-.012.011Z"
                  fill="transparent"
                  strokeWidth="1"
                  stroke="#fff"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={transition}
                />
                <motion.path
                  d="M30.763 37.97h15.35c.849 0 1.534-.688 1.534-1.541a1.53 1.53 0 0 0-1.533-1.542H33.65a1.54 1.54 0 0 1-1.36-1.512V4.602a1.536 1.536 0 0 1 1.36-1.513h12.464a1.531 1.531 0 0 0 1.533-1.542c0-.852-.685-1.541-1.533-1.541H30.763c-.848 0-1.533.689-1.533 1.542v34.881c0 .853.685 1.542 1.533 1.542ZM101.965 1.548c0-.853-.686-1.542-1.534-1.542H79.418c-.849 0-1.534.689-1.534 1.542 0 .852.686 1.541 1.534 1.541h7.747c.442 0 .802.362.802.806v32.703c0 .76.685 1.373 1.533 1.373.848 0 1.534-.613 1.534-1.373V3.895c0-.444.36-.806.801-.806h8.596c.848 0 1.534-.689 1.534-1.541ZM73.284 0c-.848 0-1.533.69-1.533 1.542v26.063c0 .444-.36.806-.802.806a.797.797 0 0 1-.703-.42L54.74.782a1.536 1.536 0 0 0-1.725-.725 1.541 1.541 0 0 0-1.139 1.49v34.881c0 .853.686 1.542 1.534 1.542s1.533-.69 1.533-1.542V10.377c0-.443.36-.806.807-.806.297 0 .552.158.692.398l15.519 27.23a1.528 1.528 0 0 0 1.725.725 1.536 1.536 0 0 0 1.138-1.49V1.549c0-.853-.685-1.542-1.533-1.542M25.112.082a1.534 1.534 0 0 0-1.94.975l-9.334 28.212a.806.806 0 0 1-1.394.234.86.86 0 0 1-.122-.228L2.99 1.057a1.53 1.53 0 0 0-1.94-.975 1.54 1.54 0 0 0-.97 1.944l11.546 34.911c.21.63.796 1.057 1.458 1.057.662 0 1.249-.426 1.452-1.057l11.547-34.91a1.547 1.547 0 0 0-.97-1.951M160.376 17.444c-.847 0-1.533.689-1.533 1.541 0 .853.686 1.542 1.533 1.542h8.492c.849 0 1.534-.69 1.534-1.542 0-.852-.685-1.541-1.534-1.541h-8.492Z"
                  fill="transparent"
                  strokeWidth="1"
                  stroke="#fff"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={transition}
                />
                <motion.path
                  d="M155.434 37.97h15.35c.849 0 1.534-.688 1.534-1.541a1.57 1.57 0 0 0-.348-.981 1.52 1.52 0 0 0-1.186-.56h-12.463a1.542 1.542 0 0 1-1.36-1.513V4.602a1.536 1.536 0 0 1 1.36-1.513h12.463a1.531 1.531 0 0 0 1.534-1.541c0-.853-.685-1.542-1.534-1.542h-15.35c-.847 0-1.534.689-1.534 1.542v34.881c0 .853.687 1.542 1.534 1.542Z"
                  fill="transparent"
                  strokeWidth="1"
                  stroke="#fff"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={transition}
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      {props.children}
    </>
  );
};

export default PreLoader;
