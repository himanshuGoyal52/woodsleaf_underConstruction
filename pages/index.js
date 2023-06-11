import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WhatsappShareButton } from 'react-share'

export default function Home() {
  const [ email , setEmail ] = useState('');
  const handleChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const data = {
      email : email
    }
    fetch(`${location.href}/api/notifiy`,{
      method : 'POST',
      headers : {
        "Content-Type" : 'application/json',
      },
      body : JSON.stringify(data), 
    }).then(res => res.text())
    .then(data => {
      toast.success("Hey! you will be get notified" , {position:toast.POSITION.BOTTOM_RIGHT , className:styles.notifiyPOP});
      setEmail('');
    }).catch((err) => {
      toast.error("Some error occurred :(");
    })
  }

  const [ USDtoINR , setUSDtoINR] = useState({});

  useEffect(() => {
    const getusdtoinr =  async () => {
			try{
				const _data = await axios.get('https://anyapi.io/api/v1/exchange/convert?base=USD&to=INR&amount=1&apiKey=2jkrf9duc2gab4gdrcbek8vbhmmuc7u9gt9erh17f09o87q758kla9o' ,{
				  headers : {
					'Access-Control-Allow-Origin' : '*',
					'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
				  }
				});
				setUSDtoINR(_data);
        console.log(_data);
        console.log(USDtoINR);
			}catch(err){
        // setUSDtoINR({rate : 82.45});
        console.log(USDtoINR);
			}
		}
		getusdtoinr();
  } , [USDtoINR])


  return (
    <>
      <Head>
        <title>WoodsLeaf || Furniture || Decor</title>
        <meta name="description" key="desc" content="On the first sight you think we are a furniture selling unit but we are more than that . Our vision is to make everyone aware for our nature . As we are making furniture by cutting down the trees . So we also want to grow or plant more and more trees." />
        <link rel="icon" href="/favico.png" />
        <meta name="robots" content="all" />
        <meta name="googlebot" />
        <meta property="og:title" content="WoodsLeaf || Furniture || Decor" />
        <meta
          property="og:description"
          content="On the first sight you think we are a furniture selling unit but we are more than that . Our vision is to make everyone aware for our nature . As we are making furniture by cutting down the trees . So we also want to grow or plant more and more trees."
        />
        <meta
          property="og:image"
          content="https://woodsleaf.com/public/favico.png"
        />
      </Head>
      <ToastContainer />
      <header>
        <nav className={styles.headerContainer}>

          <div>
            <Image src={'/favico.png'} width={70} height={70} alt="WoodsLeaf.com"/>
          </div>

          <div>
            <a  href="//api.whatsapp.com/send?phone=917412972658&text=whats up gandu">WhatsApp</a>
            <Link href={'https://www.facebook.com/WoodsLeaf-107229878756138'}>
              <a target="_blank" className={styles.socialLink}> <Image width={20} height={20} src={'/facebook.png'} alt="WoodsLeaf Facebook Page" /> </a>
            </Link>
            <Link href={'https://www.instagram.com/woods_leaf/'}>
              <a target="_blank" className={styles.socialLink}> <Image width={20} height={20} src={'/instagram.png'} alt="WoodsLeaf Facebook Page" /> </a>
            </Link>
            <Link href={'https://www.linkedin.com/company/83014745/admin/'}>
              <a target="_blank" className={styles.socialLink}> <Image width={20} height={20} src={'/linkedin.png'} alt="WoodsLeaf Facebook Page" /> </a>
            </Link>
            <Link href={'https://twitter.com/woods__leaf'}>
              <a target="_blank" className={styles.socialLink}> <Image width={20} height={20} src={'/twitter.png'} alt="WoodsLeaf Facebook Page" /> </a>
            </Link>
            <Link href={'https://www.youtube.com/channel/UCW_pxOYoy6OzyYjCRsLGF6A'}>
              <a target="_blank" className={styles.socialLink}> <Image width={20} height={20} src={'/youtube.png'} alt="WoodsLeaf Facebook Page" /> </a>
            </Link>

          </div>

        </nav>
      </header>

      <main className={styles.mainContainer}>
          <Image src={'/caution-sign.png'} height={40} width={40} alt="WoodsLeaf is under construction"/>
          <p className={styles.para}>
            Right now our website is under construction you can order on our <Link href={'https://www.instagram.com/woods_leaf/'}><a className={styles.instaLink} target="_blank">instagram</a></Link> handle
          </p>
          <div className={styles.mainImg}>
            <Image src={'/main.png'} alt="WoodsLeaf" height={168} width={731}/>
          </div>
      </main>

      <div className={styles.paddingDe}>
        <div className={styles.scrolling}>
          <Image className={styles.productImg} src={'/products/wardrobe.png'} height={40} width={40}  alt="wardrobe"/>
          <Image className={styles.productImg} src={'/products/armchair.png'} height={40} width={40}  alt="wardrobe"/>
          <Image className={styles.productImg} src={'/products/bookcase.png'} height={40} width={40}  alt="wardrobe"/>
          <Image className={styles.productImg} src={'/products/buffet.png'} height={40} width={40}  alt="wardrobe"/>
          <Image className={styles.productImg} src={'/products/coffee-table.png'} height={40} width={40}  alt="wardrobe"/>
          <Image className={styles.productImg} src={'/products/desk.png'} height={40} width={40}  alt="wardrobe"/>
          <Image className={styles.productImg} src={'/products/sofa-with-buttons.png'} height={40} width={40}  alt="wardrobe"/>
          <Image className={styles.productImg} src={'/products/sliding-door-closet.png'} height={40} width={40}  alt="wardrobe"/>
          {/* <Image className={styles.productImg} src={'/products/chair.png'} height={40} width={40}  alt="wardrobe"/> */}
          {/* <Image className={styles.productImg} src={'/products/dressing-table.png'} height={40} width={40}  alt="wardrobe"/> */}
        </div>
      </div>

      <footer className={styles.footerContainer}>
      
        <p className={styles.notiPara}>Get notified when we go live!</p>
        <div>
          <input onChange={handleChange} className={styles.inputEmail} placeholder='Enter your email' type='email' value={email}/> 
          <button onClick={handleSubmit} className={styles.inputButton} >Get Notified</button>
        </div>
        <span className={styles.footerCopy}>Copyright © 2022 Woods Leaf - All Rights Reserved </span>
      </footer>
    </>
  )
}
