import React, {useState} from 'react';
import style from './Start.module.sass'
import {Link, useNavigate} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";
import Video from "../../components/Video/Video";
import {useSelector} from "react-redux";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
const Start = () => {
    const { user } = useSelector(state=>state.auth)
    //Вариант анимации
    const flourAnimated = {
        active: {
            rotateZ: -20,
            scale: 0.8,
            y: 100
        },
        noActive: {
            rotateZ: 0,
            scale: 1,
            y: 0
        }
    }
    //обработка наведения на кнопку play
    const [activePlay, setActivePlay] = useState(false)
    const touchPlay = () => {
        setActivePlay(!activePlay)
    }
    const navigate = useNavigate()
    const [videoPage, setVideoPage] = useState(false)

    return (
        <>
            <AnimatePresence initial={false}>
                {!videoPage&&
                    <motion.main
                        key={'animeStart'}
                        initial={{x: 1000, opacity: 0.3}}
                        animate={{x: 0, opacity: 1}}
                        exit={{x: -2000, opacity: 0.3}}
                        transition={{duration: 1}}
                        className={style.main}>
                    <div className={style.mainInfo}>
                        <div className={style.mainInfoContainer}>
                            <div className={style.mainInfoContainerTitle}>
                                <h1>Твоя система</h1>
                                <p>
                                    Надежный помощник самозанятого бухгалтера.
                                    Предлагаем присоединиться к команде профессионалов
                                    и закрыть множество вопросов без лишней рутины и траты времени на знакомство со сторонними сервисами
                                </p>
                            </div>
                            <button
                                onClick={()=>navigate('/registration')}
                                className={style.mainInfoContainerBtn}>присоединиться</button>
                        </div>
                        <div className={style.mainInfoIt}>IT</div>
                        <div className={style.mainInfoBuh}>бухгалтер</div>
                        <div className={style.mainInfoYour}>юрист</div>
                    </div>
                    <div className={style.mainGirl}>
                        <header className={style.mainGirlHeader}>
                            {user&&<ProfileHeader/>}
                            {!user&&<Link to={'/authorization'}>войти</Link>}
                        </header>
                        <div className={style.mainGirlContent}>
                            <motion.div
                                variants={flourAnimated}
                                initial={'noActive'}
                                animate={activePlay?'active':'noActive'}
                                className={style.mainGirlContentFlour}>
                                <svg width="291" height="457" viewBox="0 0 291 457" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M282.849 382.614C280.426 382.715 278.027 382.143 275.978 380.977C273.928 379.81 272.327 378.106 271.391 376.095C270.456 374.083 270.23 371.862 270.746 369.732C271.262 367.601 272.494 365.665 274.275 364.185C274.574 363.12 274.788 362.354 275.086 361.289C274.979 361.057 274.872 360.825 274.764 360.593C263.873 337.252 226.961 337.413 216.163 360.789C206.578 381.537 194.376 402.32 191.371 424.258C190.048 433.954 190.606 443.784 193.021 453.309C170.51 409.173 158.82 361.202 158.745 312.649C158.74 300.466 159.493 288.291 161.001 276.183C162.247 266.257 163.975 256.401 166.186 246.617C178.252 193.525 204.157 143.763 241.775 101.417C259.982 92.4884 274.706 78.7579 283.963 62.076C287.317 56.0794 289.687 49.6781 291 43.0711C288.946 43.3132 286.859 43.4645 284.805 43.5855C284.165 43.6157 283.492 43.6458 282.852 43.6763L282.611 43.686C280.353 43.7771 278.115 43.2797 276.165 42.2539C274.215 41.2281 272.636 39.7175 271.619 37.9041C270.602 36.0906 270.19 34.0516 270.432 32.0324C270.674 30.0133 271.561 28.1001 272.985 26.5232C273.871 25.5423 274.759 24.5619 275.647 23.582C276.993 22.0688 278.374 20.5859 279.721 19.073C279.876 18.9292 280.022 18.7776 280.158 18.6188C281.707 16.8938 283.256 15.1992 284.805 13.4742C281.978 9.53021 278.175 6.22646 273.694 3.8206C258.172 -4.35024 236.758 1.3088 225.546 13.9283C214.3 26.5475 212.179 44.2514 216.085 60.018C219.418 73.5151 226.691 85.8924 234.873 97.6643C234.031 98.6328 233.155 99.571 232.313 100.54C216.926 118.323 203.515 137.419 192.273 157.555C195.453 135.223 190.757 108.319 182.752 90.9766C173.638 71.2167 156.557 54.5749 141.515 37.4925C123.447 16.9739 86.3963 25.9287 83.2131 51.9392C83.1823 52.191 83.1523 52.4427 83.1229 52.6944C85.3572 53.8274 87.5442 55.0298 89.6841 56.3018C92.3724 57.9161 94.4554 60.2227 95.6602 62.9193C96.8651 65.6159 97.1355 68.5767 96.4362 71.4137C95.7369 74.2508 94.1003 76.8319 91.7411 78.8188C89.3818 80.8056 86.4098 82.1056 83.2145 82.5483L82.8873 82.5938C83.6832 89.8314 85.0901 97.0041 87.0959 104.05C92.9079 123.72 103.178 142.098 117.263 158.034C131.348 173.969 148.944 187.117 168.947 196.653C170.26 197.258 171.54 197.864 172.853 198.439C161.557 227.21 154.472 257.179 151.776 287.592C150.249 305.535 150.339 323.56 152.045 341.489C152.011 341.277 151.977 341.066 151.944 340.854C147.634 320.916 135.801 302.926 118.442 289.922C92.6612 270.887 56.2371 263.877 28.4238 248.577C15.0352 241.212 -2.1213 250.73 0.215373 264.681C0.252699 264.904 0.290605 265.126 0.329114 265.349C4.47526 266.867 8.51218 268.615 12.4164 270.584C14.6507 271.717 16.8378 272.92 18.9777 274.192C21.6659 275.806 23.7489 278.113 24.9537 280.809C26.1585 283.506 26.429 286.467 25.7297 289.304C25.0304 292.141 23.3939 294.722 21.0346 296.709C18.6753 298.696 15.7033 299.996 12.508 300.438L12.1806 300.484C11.9449 300.514 11.7428 300.544 11.5075 300.575C18.5917 315.778 28.5347 329.772 40.901 341.943C56.1775 356.677 74.6411 368.45 95.1599 376.542C115.679 384.634 137.82 388.874 160.227 389.002H160.26C166.343 412.758 175.155 435.881 186.557 458H280.495C280.832 457.062 281.135 456.093 281.438 455.155C272.743 455.647 264.013 455.179 255.445 453.763C262.414 446.077 269.384 438.329 276.354 430.643C276.509 430.499 276.655 430.347 276.791 430.189C280.327 426.255 283.896 422.351 287.431 418.417L287.433 418.412C287.621 406.353 286.082 394.322 282.852 382.616L282.849 382.614Z" fill="#F2F2F2"/>
                                </svg>
                            </motion.div>
                            <div className={style.mainGirlContentBody}>
                                <motion.div
                                    animate={activePlay?{rotateZ:10}:{rotateZ:0}}
                                    className={style.mainGirlContentBodyHand}>
                                    <svg width="226" height="183" viewBox="0 0 226 183" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.33822 94.7444C8.24503 96.461 9.55361 97.9718 11.1719 99.1702C12.7902 100.369 14.6788 101.225 16.7046 101.681C18.7305 102.136 20.8443 102.178 22.8972 101.804C24.9502 101.431 26.8922 100.65 28.5867 99.5182L70.1844 125.901L70.9359 101.745L31.3187 80.3943C29.0748 77.9303 25.9146 76.3126 22.437 75.8477C18.9593 75.3828 15.4058 76.1031 12.4498 77.872C9.49389 79.6408 7.34085 82.3354 6.39873 85.4452C5.45661 88.5549 5.79089 91.8636 7.33817 94.7445L7.33822 94.7444Z" fill="#E6C3B4"/>
                                        <path d="M137.988 18.694C137.988 18.694 94.4884 31.1151 124.368 93.6239L120.772 126.826L87.8935 109.772L84.4398 101.65L48.3907 84.4146L36.3056 112.076L57.6413 126.394L64.5754 136.101L74.7486 137.874L108.653 160.626L122.317 166.177C122.317 166.177 139.708 173.36 153.369 166.686C157.017 164.915 160.342 162.633 163.221 159.922C168.851 154.608 173.442 146.969 175.462 136.012C179.806 113.325 182.661 90.4278 184.014 67.4436L137.988 18.694Z" fill="#3F3D56"/>
                                    </svg>
                                </motion.div>
                                <div className={style.mainGirlContentBodyTorso}>
                                    <svg width="222" height="719" viewBox="0 0 222 719" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M199.14 407.444C197.389 406.264 195.922 404.719 194.84 402.917C193.759 401.116 193.091 399.102 192.882 397.018C192.673 394.933 192.929 392.829 193.632 390.853C194.335 388.877 195.468 387.078 196.95 385.581L174 340L200.57 343.198L218.29 385.993C220.668 388.621 221.988 392.021 222 395.547C222.012 399.074 220.714 402.482 218.354 405.126C215.993 407.77 212.734 409.467 209.192 409.894C205.651 410.321 202.074 409.449 199.14 407.444H199.14Z" fill="#E6C3B4"/>
                                        <path d="M106 249.443L123.44 247.047C123.44 247.047 125.124 273.202 133.466 277.165C141.808 281.129 138.996 281.781 139.98 285.977C140.928 288.931 142.49 291.653 144.565 293.967C146.64 296.28 149.181 298.133 152.024 299.406C158.632 302.297 188.69 375 188.69 375L214 369.129C211.658 362.817 210.116 356.239 209.409 349.548C208.52 339.431 196.993 315.56 193.197 312.017C189.401 308.473 190.902 302.226 188.935 293.834C186.967 285.442 188.333 293.224 185.054 279.237C181.775 265.251 144.91 181.429 143.365 168.515C141.82 155.601 123.73 148 123.73 148L109.669 151.262L106 249.443Z" fill="#3F3D56"/>
                                        <path d="M38.03 293.362L10 424L163 412.55L117.206 285L38.03 293.362Z" fill="#E6C3B4"/>
                                        <path d="M6.27026 514.101C18.3485 580.544 14.6204 538.314 14.6204 538.314C14.6204 538.314 5.56161 548.884 11.6007 554.929C17.6399 560.974 11.6007 573.047 11.6007 573.047L33.1881 748.804L36.5619 764H60.1785L61.8654 743.738L72.6498 645.483C72.6498 645.483 78.689 633.394 75.6695 630.371C72.6499 627.349 78.689 609.231 78.689 609.231L86.2294 465.776L114.451 553.595C114.451 553.595 109.914 559.64 114.451 564.165C118.972 568.69 146.57 660.579 146.57 660.579L179.949 740.361L181.636 742.05L190.07 764L212 753.869L198.982 641.38L198.442 638.966L197.869 636.416C197.869 636.416 200.888 628.869 196.368 624.327C195.045 622.942 194.079 621.257 193.553 619.415C193.027 617.573 192.957 615.631 193.348 613.757C193.496 613.599 193.631 613.429 193.753 613.25C194.287 612.516 194.655 611.675 194.833 610.785C195.237 608.894 194.883 606.243 191.83 603.187C190.97 602.272 190.248 601.237 189.688 600.114C185.099 591.418 182.788 572.996 182.788 572.996C182.788 572.996 178.706 427.093 165.345 404.805C164.637 403.639 133.458 323.757 132.716 323.301C117.635 314.251 29.8144 326.678 29.8144 326.678C29.8144 326.678 3.0651 403.403 2.74459 405.396C1.00694 416.59 -3.96925 457.739 6.27026 514.101Z" fill="#2F2E41"/>
                                        <path d="M27 168.186C27 168.186 39.3702 149.74 63.716 125.375C76.605 121.075 98.9371 123.581 106.679 125.375C142.482 172.672 144.735 169.529 154.055 195.955C156.471 202.808 157.68 209.392 156.606 214.767C152.309 236.265 122.211 289.368 123.643 295.101C125.075 300.834 135.1 308 125.076 308C115.051 308 31.9675 298.667 34.8317 294.367C37.696 290.068 27 168.186 27 168.186Z" fill="#3F3D56"/>
                                        <path d="M70.5 106C93.4198 106 112 87.6437 112 65C112 42.3563 93.4198 24 70.5 24C47.5802 24 29 42.3563 29 65C29 87.6437 47.5802 106 70.5 106Z" fill="#E6C3B4"/>
                                        <path d="M163.169 153.761C171.946 150.643 180.723 147.518 189.5 144.388C187.987 141.843 186.061 139.569 183.8 137.662C175.443 130.665 163.908 129.401 153.299 127.041C142.672 124.68 131.137 119.842 127.253 109.66C123.218 99.0724 129.069 87.6424 132.465 76.8529C137.224 61.7983 137.123 44.9904 130.75 30.5595C124.378 16.1287 111.431 4.42885 96.0623 0.989718C80.694 -2.43256 63.3245 3.14762 53.8748 15.7578C47.7866 13.9266 41.2402 14.3937 35.472 17.0711C29.7038 19.7484 25.113 24.4507 22.5664 30.2898C20.3637 35.8194 20.2965 42.4785 23.5753 47.4517C26.8541 52.425 33.8656 54.9706 39.1454 52.2058L36.0852 44.4172C45.5518 47.6372 51.7058 64.7991 50.4279 74.7456C49.1668 84.6753 43.3827 93.3742 37.5143 101.483C31.6461 109.592 25.3911 117.785 22.8689 127.479C19.237 141.421 24.1469 156.661 33.2267 167.838C42.3065 179.015 55.1022 186.602 68.3519 192.182C78.2702 196.363 88.5775 199.548 99.1224 201.69C97.2392 198.015 95.3728 194.34 93.4895 190.665L115.836 204.219C120.157 204.64 124.512 204.893 128.867 204.977C141.545 205.197 154.475 203.865 166.078 198.79C177.696 193.699 187.903 184.477 192.106 172.491C193.454 168.614 194.092 164.525 193.989 160.421C183.716 158.195 173.442 155.975 163.169 153.761Z" fill="#2F2E41"/>
                                    </svg>
                                </div>
                                <motion.div
                                    animate={activePlay?{scale: 1.2}:{scale:1}}
                                    onClick={()=>setVideoPage(true)}
                                    onMouseLeave={touchPlay}
                                    onMouseEnter={touchPlay}
                                    className={style.mainGirlContentBodyPlay}>
                                    <div className={style.mainGirlContentBodyPlayPolygon}/>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.main>
                }
            </AnimatePresence>
            <AnimatePresence>
                {videoPage&&<Video/>}
            </AnimatePresence>
        </>

    );
};

export default Start;