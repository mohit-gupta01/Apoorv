import React from 'react'
import styles from '../styles/Description.module.css'
import Image from 'next/image'
import sp1 from '../../public/sp1.png'
import sp2 from '../../public/sp2.png'
import sp3 from '../../public/sp3.png'


import abc from '../../public/img.svg'
import { CollisionButton } from './Buttons/Button'
import Marquee from "react-fast-marquee";

const Description = () => {
    return (
        <>
            <div className={styles.back} id="home">
                <div className={styles.sponsors}>
                    <Marquee gradient={false} speed={100}>
                        <Image
                            src={sp3}
                            alt={"sponsers"}
                            style={{marginRight: '3rem'}}
                        />
                        <div className={styles.spon} style={{marginRight: '3rem'}}>
                            <Image
                                src={sp2}
                                alt={"sponsers"}
                            />
                        </div>
                        <div className={styles.spon3} style={{marginRight: '3rem'}}>
                            <Image
                                src={sp1}
                                alt={"sponsers"}
                            />
                        </div>
                        <Image
                            src={sp3}
                            alt={"sponsers"}
                            style={{marginRight: '3rem'}}
                        />
                        <div className={styles.spon} style={{marginRight: '3rem'}}>
                            <Image
                                src={sp2}
                                alt={"sponsers"}
                            />
                        </div>
                        <div className={styles.spon3} style={{marginRight: '3rem'}}>
                            <Image
                                src={sp1}
                                alt={"sponsers"}
                            />
                        </div>
                    </Marquee>
                </div>

                <div style={{
                    maxWidth: '100%',
                    height: '80px',
                }}>

                </div>
            </div>



            <div className={styles.main_div}>
                <div className={styles.wrapper}>
                    <div className={styles.head} >
                        <h1>Apoorv, IIITk&apos;s<br />
                            techno-cultural fest,
                        </h1>
                    </div>
                    <div className={styles.body}>
                        <p>
                            has been celebrating arts, heritage, music and lifestyle since its inception in 2019. A myriad of events with impressive and breathtaking performances has always been the norm.<br></br>
                            It&apos;s the amalgamation of mind gruelling competitions, thought provoking expert talks and workshops that stimulate your cerebral matter!
                            <br></br><br></br>
                        </p>
                    </div>
                    <CollisionButton>
                        Register!
                    </CollisionButton>
                </div>
                <div className={styles.img}>
                    <Image
                        src={abc}
                        alt={"image"}
                        fill
                    />
                </div>
            </div>
        </>
    );
}

export default Description
