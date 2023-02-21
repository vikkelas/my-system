import React from 'react';
import style from './Video.module.sass';
import {Parallax} from "react-scroll-parallax";
import logo from '../../images/logo2black.png';
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
import { Link, Element } from 'react-scroll';

const Video = () => {
    const navigate =useNavigate()
    return (
        <motion.div
            key={'animeStart'}
            initial={{x: 1500, opacity: 0.7}}
            animate={{x: 0, opacity: 1}}
            exit={{x: -1000, opacity: 0.3}}
            transition={{duration: 1.2, delay: 0.8}}
            className={style.main}>
            <div className={style.mainContainer}>
                <Parallax speed={-55}>
                    <div className={style.mainContainerAnimate}>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <div className={style.mainContainerAnimateImg}>
                            <img src={logo} alt="Твоя система логотип"/>
                        </div>
                    </div>
                </Parallax>
                <Link smooth={true} duration={600} to={'box1'} className={style.mainContainerScroll}>
                    <span className={style.mainContainerScrollText}>Узнать больше</span>
                    <div className={style.mainContainerScrollArrow}>
                        <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5556 19.0003L29.1506 33.5353L46.7456 19.0003L52 19L29 38L6 19L11.5556 19.0003Z" fill="white" fillOpacity="0.5"/>
                        </svg>
                    </div>
                </Link>
            </div>
            <Element name={'box1'} className={style.mainContent}>
                <h1 className={style.mainContentTitle}>привет !</h1>
                <div className={style.mainContentBox}>
                    <div className={style.mainContentBoxText}>
                        <p>
                            поступило требование о предоставлении документов или вызов руководителя на допрос в налоговую инспекцию? оценим ситуацию,
                        </p>
                        <p>
                            поможем определиться со стратегией, составим ответ, подготовим
                            к беседе с инспектором, организуем сопровождение налогового юриста.
                        </p>
                        <p>
                            у контрагента, или, наоборот, у вас возникли претензии по поставленному товару, оказанным услугам? проведем претензионную работу, отстоим интересы вашего клиента в суде.
                        </p>
                        <p>
                            IT специалист возьмет на себя заботы, связанные с установкой, обновлением и систематизацией 1С, поможет решить техническую проблему как у вас, так и у вашего клиента.
                        </p>
                        <p>
                            вопросы регистрации: открытие новой компании, смена адреса, директора, учредителя, устава, ОКВЭД и.т.д, проконсультируем, поможем, зарегистрируем.
                        </p>
                        <p>
                            и, наконец, с нами вы всегда сможете спокойно уйти в отпуск или взять выходной, зная, что ваше дело осталось в надежных руках
                        </p>
                    </div>
                    <div className={style.mainContentBoxImg}>
                        <svg width="894" height="995" viewBox="0 0 894 995" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M894 446.91C894.026 527.135 872.449 605.887 831.534 674.9C790.62 743.913 731.877 800.64 661.472 839.126C657.481 841.308 653.436 843.436 649.374 845.493C634.308 853.172 618.808 859.97 602.953 865.852C596.639 868.229 590.259 870.44 583.814 872.485C583.194 872.698 582.555 872.911 581.934 873.088C518.815 893.124 452.026 898.859 386.415 889.877C320.803 880.895 258.014 857.422 202.605 821.161C195.173 816.302 187.894 811.23 180.769 805.945C176.743 802.948 172.769 799.898 168.849 796.759C157.763 787.962 147.12 778.64 136.921 768.791C93.5588 727.15 59.0743 677.165 35.5436 621.847C12.0128 566.529 -0.077622 507.023 0.000374982 446.91C0.000374982 200.081 200.121 0 447 0C693.879 0 894 200.081 894 446.91Z" fill="url(#paint0_linear_1838_2)" fillOpacity="0.3"/>
                            <path d="M553.177 656.022L543.085 694.056L581.408 873.301C478.394 905.639 367.142 899.938 268 857.241L297.919 732.214L298.914 664.397L302.166 440.779L302.983 440.354C303.033 440.324 303.087 440.3 303.143 440.284L379.363 401.276L510.874 398L609 445.631L608.254 448.411L553.177 656.022Z" fill="#3F3D56"/>
                            <path d="M608.786 983.338C605.763 979.749 603.565 975.543 602.348 971.015C601.132 966.488 600.925 961.75 601.744 957.134C602.562 952.518 604.385 948.138 607.085 944.301C609.785 940.464 613.296 937.264 617.37 934.926L596 823L650.807 845.776L662.698 948.571C666.182 955.656 666.939 963.77 664.825 971.375C662.712 978.98 657.874 985.547 651.228 989.832C644.583 994.118 636.592 995.824 628.77 994.627C620.947 993.43 613.837 989.413 608.786 983.338V983.338Z" fill="#E6C3B4"/>
                            <path d="M590.485 449.561L604.602 445C604.602 445 649.385 473.533 645.124 542.516C645.124 542.516 646.803 578.213 645.2 601.97C643.362 629.219 668 900 668 900H588.2L554 654.785L590.485 449.561Z" fill="#3F3D56"/>
                            <path d="M544 274.5C544 292.399 538.663 309.897 528.663 324.779C518.664 339.662 504.452 351.261 487.824 358.111C471.196 364.961 452.899 366.753 435.247 363.261C417.595 359.769 401.38 351.15 388.653 338.493C375.927 325.837 367.26 309.711 363.749 292.156C360.237 274.601 362.039 256.404 368.927 239.867C375.815 223.331 387.478 209.197 402.443 199.252C417.408 189.308 435.002 184 453 184H453C464.92 183.971 476.73 186.276 487.755 190.786C498.779 195.295 508.803 201.92 517.253 210.282C525.703 218.643 532.414 228.579 537.003 239.52C541.593 250.461 543.97 262.194 544 274.049C544 274.2 544 274.35 544 274.5Z" fill="#E6C3B4"/>
                            <path d="M361.921 152.677C372.624 129.747 393.337 134.28 411.452 142.053C434.392 136.984 456.209 121.806 480.926 130.782C505.272 166.062 587.015 155.682 569.624 213.118C569.602 226.881 595.618 218.87 591.076 241.411C604.858 284.789 541.33 366.943 504.86 349.643C513.879 333.173 534.483 295.766 503.233 292.056C436.008 354.375 496.297 173.386 411.83 226.02C383.863 251.52 345.575 178.184 361.921 152.677Z" fill="#2F2E41"/>
                            <path d="M501.061 884L357 855.208L393.939 667C444.913 686.455 492.933 696.053 538 695.792C498.615 754.082 480.722 816.669 501.061 884Z" fill="#E4E4E4"/>
                            <path d="M298.775 862L153.6 833.34C141.683 748.469 152.516 684.569 190.825 646C242.193 665.366 290.584 674.919 336 674.66C312.006 734.254 299.382 797.789 298.775 862V862Z" fill="#AF05FF"/>
                            <path d="M383.728 841.811C383.151 837.187 381.556 832.745 379.058 828.797C376.56 824.849 373.218 821.491 369.268 818.961C365.318 816.431 360.857 814.79 356.197 814.153C351.538 813.516 346.794 813.899 342.301 815.275L274.601 724L254 779.207L321.447 857.42C324.28 864.745 329.727 870.787 336.757 874.4C343.786 878.012 351.908 878.945 359.585 877.021C367.262 875.097 373.961 870.45 378.41 863.961C382.86 857.472 384.752 849.591 383.728 841.811Z" fill="#E6C3B4"/>
                            <path d="M324 446.242L311.852 438C311.852 438 239.566 444.762 224.69 512.183C224.69 512.183 213.817 552.69 208.822 575.946C206.253 587.907 172 703.473 172 703.473L288.161 831L319.896 783.177L288.161 703.473L324 446.242Z" fill="#3F3D56"/>
                            <defs>
                                <linearGradient id="paint0_linear_1838_2" x1="447" y1="0" x2="447" y2="894" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#C4C4C4"/>
                                    <stop offset="1" stopColor="#C4C4C4" stopOpacity="0.05"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
                <button
                    onClick={()=>navigate('/registration')}
                    className={style.mainContentBtn}>Присоединиться</button>
            </Element>
        </motion.div>
    );
};

export default Video;