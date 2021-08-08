import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="body bg-white">
      <Head>
        <title>OpenCV TRIA project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-6 sm:px-1">
        <section className="container mx-auto px-6 sm:px-12 flex flex-col-reverse  sm:flex-row items-center">

<div className="sm:w-2/5 flex flex-col items-start mt-8 sm:mt-0 ">
    <h1 className="text-4xl lg:text-6xl leading-none mb-4"><strong className="font-black">Food health</strong> </h1>
    <p className="lg:text-lg mb-4 sm:mb-12">Bakced by OAK-D</p>
    <a href="#product" className="font-semibold text-lg bg-blue-400 hover:bg-blue-700 text-white py-3 px-10 rounded-full">Learn more</a>
</div>
<div className="sm:w-3/5">
    <svg className="w-full" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 370.6 270.58"><path d="M329.44 142.22A142.22 142.22 0 1098.1 253.05h178.23a141.94 141.94 0 0053.11-110.83z" fill="#ededec"/><path d="M167.18 226.41h33.89v11.92a14.31 14.31 0 01-14.31 14.31h-5.27a14.31 14.31 0 01-14.31-14.31v-11.92z" fill="#252527"/><path d="M157.25 189.58h54v39.18a10.77 10.77 0 01-10.77 10.77H168a10.77 10.77 0 01-10.77-10.77v-39.18h.02z" fill="#a098a2"/><path d="M211.46 212.63H156.7a6.52 6.52 0 01-6.51-6.51 6.51 6.51 0 016.51-6.51h54.76a6.5 6.5 0 016.51 6.51 6.51 6.51 0 01-6.51 6.51z" fill="#bdb6bf"/><path d="M178.65 212.63h-11.47a6.51 6.51 0 01-6.51-6.51 6.5 6.5 0 016.51-6.51h11.47a6.51 6.51 0 016.51 6.51 6.52 6.52 0 01-6.51 6.51z" fill="#d8d3d8"/><path d="M211.46 232.36H156.7a6.51 6.51 0 01-6.51-6.51 6.52 6.52 0 016.51-6.51h54.76a6.51 6.51 0 016.51 6.51 6.5 6.5 0 01-6.51 6.51z" fill="#bdb6bf"/><path d="M173.24 232.36h-.66a6.51 6.51 0 01-6.51-6.51 6.52 6.52 0 016.51-6.51h.66a6.51 6.51 0 016.51 6.51 6.5 6.5 0 01-6.51 6.51z" fill="#d8d3d8"/><path d="M261.15 100.06c0-39.23-34.4-71-76.85-71s-76.85 31.8-76.85 71c0 23.51 12.36 44.34 31.4 57.27s8.93 4.91 9.92 18.22v9.56c0 4.48 3.93 8.12 8.79 8.12h53.61c4.86 0 8.79-3.64 8.79-8.12v-9.65c1-13.25 9.75-18.08 9.75-18.08 19.06-12.93 31.44-33.79 31.44-57.32z" fill="#e5bf47"/><circle cx="185.19" cy="106.73" r="55.52" transform="rotate(-77.7 185.17293 106.73552)" fill="#ebcd73"/><path d="M176.2 193.23v-80.08a10.73 10.73 0 00-10.73-10.73h0a10.73 10.73 0 00-10.73 10.73v6a10.73 10.73 0 0010.73 10.73h18.52" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2.20521"/><path d="M192 193.23v-80.08a10.72 10.72 0 0110.72-10.73h0a10.72 10.72 0 0110.73 10.73v6a10.72 10.72 0 01-10.73 10.73h-19.94" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2.20521"/><path d="M138.5 66.42a60.47 60.47 0 0118.5-15.2" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="13.1376"/><path d="M126.24 116.77a60.41 60.41 0 01-1.24-12.34M245.39 104.43a60.2 60.2 0 01-2.22 16.28" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="9.03208"/><path fill="none" stroke="#262525" strokeMiterlimit="10" strokeWidth=".99051" d="M0 252.65h362.51M60.25 270.09H161"/><path d="M368.59 164.53h-16.76a2 2 0 01-2-2 2 2 0 012-2h16.75a2 2 0 012 2 2 2 0 01-1.99 2zM68.37 29.53H34.11a2 2 0 01-2-2 2 2 0 012-2h34.26a2 2 0 012 2 2 2 0 01-2 2z" fill="#afd5f1"/><rect x="328.27" y="28.2" width="6.24" height="6.04" rx="1.52" transform="rotate(-.08 329.43068 28.87789)" fill="#afd5f1"/><rect x="3.07" y="153.87" width="6.24" height="6.04" rx="1.52" transform="rotate(-.08 7.05197 157.56837)" fill="#afd5f1"/><rect x="82.12" y="122.87" width="5.48" height="5.31" rx="1.34" transform="rotate(-.08 78.69668 121.80851)" fill="#fff"/><path d="M192.5 15.77h-16.69a2 2 0 01-2-2 2 2 0 012-2h16.69a2 2 0 012 2 2 2 0 01-2 2z" fill="#fff"/><path d="M353.28 96.77h-15.89a3.84 3.84 0 01-3.85-3.84 3.84 3.84 0 013.85-3.84h15.89a3.84 3.84 0 013.84 3.84 3.84 3.84 0 01-3.84 3.84z" fill="#da9a9a"/><path d="M342.1 92.94a1 1 0 11-1-1 1 1 0 011 1zM346.31 92.93a1 1 0 01-1 1 1 1 0 010-2 1 1 0 011 1zM350.53 92.91a1 1 0 01-1 1 1 1 0 010-2 1 1 0 011 1z" fill="#fff"/><circle cx="55.85" cy="76.92" r="14.1" fill="#41599e"/><path d="M60.64 73.29a2.92 2.92 0 00-4.14 0l-.74.76-.76-.71a2.92 2.92 0 10-4.1 4.17l2.84 2.8a2.78 2.78 0 001.6.8 2.92 2.92 0 002.54-.84l2.8-2.86a2.92 2.92 0 00-.04-4.12z" fill="#fff"/><path d="M265.25 17H293a3.35 3.35 0 013.35 3.35v23.96a3.35 3.35 0 01-3.35 3.35h-26.8a4.29 4.29 0 01-4.29-4.29v-23a3.35 3.35 0 013.34-3.37z" fill="#6094cb"/><path d="M276.28 39c2.92 0 5.88.09 8.56-.1.85-.06 1.59-1.41.56-1.83a1.94 1.94 0 001.06-.93.91.91 0 00-.52-1.21c1 .25 1.42-1.35.63-1.87a2.38 2.38 0 00.85-1.37 1.37 1.37 0 00-.61-1.42 2.24 2.24 0 00-1.06-.18h-3.64a8.44 8.44 0 00-.54-5.64c-.29-.51-1.08-1.11-1.7-.72s-.42 1.26-.39 1.83a6.41 6.41 0 01-3.31 5.86s.14 4.96.11 7.58zM270.8 31.34h4.42v7.6h-4.42z" fill="#fcfbfb"/><path d="M329.16 253.05a1.4 1.4 0 01-1.3-.91l-37.62-103.31-37.63 103.31a1.38 1.38 0 11-2.6-.94l38.93-106.89a1.38 1.38 0 012.6 0l38.92 106.89a1.38 1.38 0 01-.83 1.77 1.26 1.26 0 01-.47.08z" fill="#354f92"/><path d="M294.72 158.49h-20.48a1.38 1.38 0 110-2.76h20.48a1.38 1.38 0 110 2.76zM300 173.56h-19.52a1.38 1.38 0 110-2.76H300a1.38 1.38 0 010 2.76z" fill="#354f92"/><path d="M278.32 173.56h-18.7a1.38 1.38 0 010-2.76h18.7a1.38 1.38 0 010 2.76zM305.27 188.64h-19.52a1.39 1.39 0 010-2.77h19.52a1.39 1.39 0 010 2.77zM274.24 188.64h-19.52a1.39 1.39 0 010-2.77h19.52a1.39 1.39 0 010 2.77zM310.54 203.71H291a1.39 1.39 0 010-2.77h19.52a1.39 1.39 0 010 2.77zM268.5 203.71H249a1.39 1.39 0 010-2.77h19.5a1.39 1.39 0 110 2.77zM315.81 218.78h-19.52a1.38 1.38 0 010-2.76h19.52a1.38 1.38 0 110 2.76zM263.21 218.78h-19.52a1.38 1.38 0 110-2.76h19.52a1.38 1.38 0 010 2.76zM321.09 233.85h-19.52a1.38 1.38 0 110-2.76h19.52a1.38 1.38 0 110 2.76zM257.78 233.85h-19.52a1.38 1.38 0 010-2.76h19.52a1.38 1.38 0 010 2.76zM290.14 146.17h-20.49a1.39 1.39 0 010-2.77h20.49a1.39 1.39 0 010 2.77z" fill="#354f92"/><path fill="#c3845c" d="M296.29 211.04l.63-11.08 5.94.78-1.17 11.64-5.69-1.01.29-.33z"/><path d="M302.52 209.55s-4 2.06-6.23-1l-10.79 5.8 18.49-.11z" fill="#070308"/><path fill="#a098a2" d="M285.49078 214.36187l18.48963-.11618.0105 1.66997-18.48964.11618z"/><path d="M302.7 136.85s-5.34 3.15-6 20.76-1.7 47.17-1.7 47.17h9l4.62-57.37-1.21-10.56z" fill="#e1b846"/><path fill="#c3845c" d="M311.82 211.04l-.59-11.08 5.95.78.04 11.64-5.68-1.01.28-.33z"/><path d="M318.05 209.55s-4 2.06-6.22-1l-10.8 5.8 18.49-.11z" fill="#070308"/><path fill="#a098a2" d="M301.02047 214.3643l18.48964-.11618.0105 1.66996-18.48964.11618z"/><path d="M314.89 139.13s5.4 6.25 4.6 17.19l-.26 48.58-10.23-.26-3.24-66.13z" fill="#e1b846"/><path fill="none" stroke="#d1a73e" strokeMiterlimit="10" strokeWidth=".75" d="M307.06 167.23l-.57-14.08-3.87-5.37"/><path d="M269.24 117.07l11.5 10.93a3.14 3.14 0 004.92-.78l1.11-2-15.55-11.32z" fill="#c3845c"/><path d="M271.48 115.54a3.51 3.51 0 11-2.26-4.43 3.52 3.52 0 012.26 4.43z" fill="#c3845c"/><path d="M269 111.06l-3.23-2a.6.6 0 00-.83.12.5.5 0 00.07.7l3.07 2.73zM282.51 123l14.81-5.47-.7 7s-8 3.47-13 4.26-1.11-5.79-1.11-5.79z" fill="#c3845c"/><path d="M301.19 117.27s-1.36-2.11-4.86-.64-9.92 3.63-9.92 3.63l5.59 9.54 10.54-4z" fill="#6094cb"/><path d="M315.3 115.16l-7.82-.75-9.8 1.8s-.65 14.1 1 21.35a2.61 2.61 0 002.74 2.05l14 .2a5.5 5.5 0 002-4.29l-1-19.22a1.2 1.2 0 00-1.12-1.14z" fill="#6094cb"/><path fill="none" stroke="#558bbf" strokeMiterlimit="10" strokeWidth=".75" d="M297.2 127.4l-.48-5.39"/><path d="M339.22 148.73L293.64 144a1.85 1.85 0 01-1.66-2l.55-5.49a1.85 1.85 0 012-1.66l45.57 4.75a1.86 1.86 0 011.67 2l-.55 5.49a1.85 1.85 0 01-2 1.64z" fill="#41599e"/><path d="M326.54 139.37a33.08 33.08 0 011.79-3.39l-5.12-10.58c-.71-2.11-5.17-9.44-7-8.16-1.34.93-.47 9.15.24 10.63l5.44 10.37z" fill="#c3845c"/><path d="M314.54 115.07s4.5.33 6.24 3.07c2.22 3.48 6 9.1 6 9.1l-11.5 4.31z" fill="#6094cb"/><path fill="none" stroke="#558bbf" strokeMiterlimit="10" strokeWidth=".75" d="M316.89 130.96l-4.3-7.39"/><path d="M323.29 134l-12.55 9.07 2 2.93 13.6-5.89a3.42 3.42 0 001.22-5.38 3.42 3.42 0 00-4.27-.73z" fill="#c3845c"/><path d="M313.09 145.58s-1.7 4.06-4.92 3.66c-3.72-.47-4-3.42-2.34-4l2.51.18a2.78 2.78 0 011.61-2.32 3.79 3.79 0 011.34-.3z" fill="#c3845c"/><path d="M310.52 142.9l-3.47.63a.49.49 0 00-.39.48.5.5 0 00.45.5l3.35.28z" fill="#c3845c"/><path d="M296.22 104.25a15.61 15.61 0 002.3-2.9l1.05-2.68 3.32.91-1.61 3.3-.91.63 6.7 7.8s-4.85 4.69-9.53 1.73c-3.94-2.49-3.3-7.12-1.32-8.79z" fill="#232132"/><path d="M314.54 100.44a6.15 6.15 0 002.43 3.81c2 1.36 2.62 6.3-1.32 8.79-4.68 3-9.53-1.73-9.53-1.73z" fill="#232132"/><path d="M301.33 96s9.41-4 12.67 2.2c1.88 3.67-.37 10.09-5 11.93-4.4 1.74-3.15-12.62-3.15-12.62z" fill="#232132"/><path d="M302.52 104.85a2.16 2.16 0 11-2.33-2 2.15 2.15 0 012.33 2z" fill="#af6b48"/><path d="M303.19 110.87l.37 4.68a2.33 2.33 0 002.82 2.31 2.62 2.62 0 002.67-2.32l-.93-7.34z" fill="#c3845c"/><path fill="#af6b48" d="M303.45 114.25l5.4-4.92-5.71 1.06.31 3.86z"/><path d="M304.63 111.61c-2.77 0-5.09-2.1-5.2-4.36l-.24-5.33a5.26 5.26 0 014.8-5.51c2.9-.24 5.94 1.86 6.19 4.76l.15 4.29a6 6 0 01-5.7 6.15z" fill="#c3845c"/><path d="M309.48 105a4.11 4.11 0 00-1.83-2.87c-1.61-.94-6-2.32-5.58-5.74 0 0 6.84-2 9.37 2.47s-1.96 6.14-1.96 6.14z" fill="#232132"/><path d="M313 105a2.15 2.15 0 11-2.33-2 2.15 2.15 0 012.33 2z" fill="#c3845c"/><path d="M303.88 96.36s-.5 2.81-4.85 4.69c0 0-1.08-2 1.81-4.74a1.47 1.47 0 011-.39h3.36z" fill="#232132"/><path d="M311.33 114.76l-4.33-.46-5.77 1.26s0 4.15 4.69 3.87a5.82 5.82 0 005.41-4.67z" fill="#c3845c"/><path d="M308.39 253.05a1.38 1.38 0 01-1.3-.91l-37.63-103.31-37.62 103.31a1.38 1.38 0 11-2.6-.94l38.92-106.89a1.38 1.38 0 012.6 0l38.93 106.89a1.38 1.38 0 01-.83 1.77 1.26 1.26 0 01-.47.08z" fill="#6094cb"/><path fill="#e5b699" d="M57.49 234.26l-.77 11.39-5.25-.22.18-11.54 5.84.37z"/><path d="M57.11 244.39l9.57 4.36a1.52 1.52 0 01.79 1.7H50.6l.62-6.13z" fill="#070308"/><path fill="#bdb6bf" d="M67.69 252.27H50.3v-1.82h17.39z"/><path fill="#e5b699" d="M40.4 234.26l-.77 11.39-5.25-.22.18-11.54 5.84.37z"/><path d="M40 244.39l9.56 4.36a1.52 1.52 0 01.8 1.7H33.5l.63-6.13z" fill="#070308"/><path fill="#bdb6bf" d="M50.59 252.27H33.2v-1.82h17.39z"/><path fill="#41599e" d="M54.46 180.76l-20.14 1.53-2.67 56.58h11.03l3.58-42.67 4.78 18.23-1.63 25.13 9.4.03 3.24-27.79-7.59-31.04z"/><path fill="none" stroke="#33559a" strokeMiterlimit="10" strokeWidth=".75" d="M50.76 193.74l-4.5 2.46"/><path fill="#dea59a" d="M54.2 163.5l-.13 5.55 3.15.04-.23-5.98-2.79.39z"/><path d="M54.39 154.07s5.06 3 4.33 12.51L54 165.53z" fill="#da9a9a"/><path d="M44.24 150.94a43.86 43.86 0 00-10.82 1.75l.22 32.25 21.41-1.65-.22-28.2a1.38 1.38 0 00-.72-1.19l-5.92-2.53s-2.92-.43-3.95-.43z" fill="#da9a9a"/><path fill="none" stroke="#cd8988" strokeMiterlimit="10" strokeWidth=".75" d="M54.9 165.72v-6.22"/><path d="M36 163.56l-1.38 15.95s-1.52 3.21-4.21-.13S30 163 30 163z" fill="#e5b699"/><path d="M36.67 166.91s1.74-13.55-2-14.24-7.51 8.41-7.51 16z" fill="#da9a9a"/><path fill="none" stroke="#cd8988" strokeMiterlimit="10" strokeWidth=".75" d="M35.65 167l1.43-.42.27-6.4"/><path d="M45.1 164.58a4.37 4.37 0 013.59-3.09c2.82-.27 3.65 1.94 3.12 3.39s-2.36 3.82-5.14 2.61-1.57-2.91-1.57-2.91z" fill="#e5b699"/><path d="M49.63 161.49a17.64 17.64 0 014.82 1.32.56.56 0 01.29.57.54.54 0 01-.64.46l-3.82-.71zM33.99 180.32l12.68-12.83-1.57-2.91-12.34 7.84 1.23 7.9z" fill="#e5b699"/><path fill="none" stroke="#d6a485" strokeMiterlimit="10" strokeWidth=".48254" d="M35.33 170.78l-2.57 1.64"/><path d="M62.43 167.8l-5.34 15.84a1.18 1.18 0 01-1.29.81l-13-1.7a1.2 1.2 0 01-1-1.59l5.49-15.82a1.19 1.19 0 011.29-.79l12.81 1.68a1.2 1.2 0 011.04 1.57z" fill="#131314"/><path fill="#131314" d="M62.2 166.63l.68.88-20.21 15.6-.72-.95 20.25-15.53z"/><path d="M63 168.59l-5.3 15.84a1.2 1.2 0 01-1.29.81l-13-1.71a1.19 1.19 0 01-1-1.58L48 166.13a1.21 1.21 0 011.29-.8L62.05 167a1.21 1.21 0 01.95 1.59z" fill="#445057"/><path d="M62.43 173.19l-1.21 3.28a.92.92 0 01-1 .59 2 2 0 01-1.67-2.61l.35-1.1a2 2 0 012-1.42h.68a.91.91 0 01.85 1.26zM48.91 146.15l-.64 5.2a2.56 2.56 0 01-3.17 2.43c-1.48-.2-3-1.13-2.76-2.73l.77-8.16z" fill="#e5b699"/><path d="M48.32 150.94s-5.86-2.12-5.36-7.37c.14-1.56 6 2.35 6 2.35z" fill="#d6a485"/><path d="M49.57 152l-2.52-1.18-4.46.13-2.61.37s-1 3.91 5.63 4.13c5.28.13 3.96-3.45 3.96-3.45z" fill="#e5b699"/><path d="M52.4 139.4s5.08-3.79 2.76-7.29-6.54-.47-6.54-.47zM48.32 130.71s-14.32-2-8 9.06l1.63-4.5z" fill="#1e2325"/><path d="M52.67 133.74s2.4 2-.61 6.4l-.8-5.62z" fill="#1e2325"/><path d="M50 141.44a2.13 2.13 0 102.37-1.93 2.17 2.17 0 00-2.37 1.93z" fill="#cb987b"/><path d="M46.7 148a5.53 5.53 0 005.8-4.69l.41-5.28a5.81 5.81 0 00-5-6.33c-3.13-.38-6.51 1.87-6.88 5.1l-.27 4.12A6.59 6.59 0 0046.7 148z" fill="#e5b699"/><path d="M52.93 136.75s.2-1.38-2.52-1.72-6.23-.11-8.17 2.32v3.81l-2.43-2.4 1.28-5.68 7.27-2.37 4.35 3z" fill="#1e2325"/><path d="M38 140.66a2.11 2.11 0 102.34-1.91 2.13 2.13 0 00-2.34 1.91z" fill="#e5b699"/><path d="M50.47 131.81s.65-1.66-1.63-2.58c-2-.79-4-.45-8.37 2.51zM52 145.61a.86.86 0 00-.52-.78 8.91 8.91 0 00-2.21-.61 12 12 0 00-4.24.48 1 1 0 01-1.11-.5 12 12 0 01-1-8.23l-1.52 1.1.2 2.33s1.18 2.52-.67 3.64c0 0-.09 5.21 4.75 6.15a7.14 7.14 0 004.27-.57 3.49 3.49 0 002.05-3.01z" fill="#1e2325"/><path d="M42.37 138.48a2.71 2.71 0 002-3.84c-1.23-3.1-2.72.84-2.72.84z" fill="#1e2325"/><path fill="#e5b699" d="M84.22 254.74l5.1-8.11 6 3.04-6.15 9.44-4.82-2.17-.13-2.2z"/><path d="M84.12 254.11s2.93 4.73 6.85 3.44l4.49 11.2-15.8-11.42z" fill="#070308"/><path fill="#bdb6bf" d="M78.66277 258.72086l.99612-1.3776 15.79369 11.42013-.99611 1.3776z"/><path fill="#41599e" d="M100.86 206.14l-6.15 26.08-10.35 17.37 9.83 5.7 12.43-22.12 4.11-16.67-9.87-10.36z"/><path fill="#5371b0" d="M94.22 255.83l-10.61-6.29 3.05-5.03 10.59 6.67-3.03 4.65z"/><path fill="#e5b699" d="M131.62 262.72l-3.85-8.77 5.88-3.26 4.36 10.39-4.51 2.77-1.88-1.13z"/><path d="M131 262.45s5.56.23 6.69-3.73l11.79 2.55-18.24 6.51z" fill="#070308"/><path fill="#bdb6bf" d="M131.22115 267.92668l18.32167-6.67578.582 1.59727-18.32168 6.67579z"/><path d="M112.76 199v5.92L128.33 229l9.74 26.34-9.53 3.81-9.83-24.15-18.58-24s-6.25-8.09 1.24-15.2z" fill="#41599e"/><path fill="none" stroke="#33559a" strokeMiterlimit="10" strokeWidth=".75" d="M109.2 222.72l-9.39-12.11"/><path fill="#5371b0" d="M138.8 255.04l-11.08 4.56-2.12-5.49 11.37-4.31 1.83 5.24z"/><path d="M113.86 177.63l7.23 5.27 8.72-11.17 2.7 1.48s-3.24 11-7.55 16.56a2.76 2.76 0 01-3.2.86 44 44 0 01-12.09-7.63z" fill="#d6a485"/><path d="M116 179.21l-5.47 9.12-5.37-4.13a5.29 5.29 0 01-1.19-7.09 5.26 5.26 0 017.68-1.41z" fill="#d1a93b"/><path d="M111.68 175.7l-8.55-2.95s-7.34 6.56-1.76 23.08l11.39 3.17a73.62 73.62 0 001.08-9.93c4.34-6.07-2.16-13.37-2.16-13.37z" fill="#dfb945"/><rect x="127.38" y="154.23" width="31.66" height="31.25" rx="4.95" fill="#6094cb"/><path d="M149.24 168.67l-1-.17a5.08 5.08 0 00-.52-1.25l.59-.83a.76.76 0 00-.09-1l-.6-.6a.76.76 0 00-1-.07l-.83.58a5.05 5.05 0 00-1.25-.51l-.17-1a.75.75 0 00-.74-.63h-.86a.76.76 0 00-.76.63l-.18 1a5.18 5.18 0 00-1.24.52l-.83-.56a.76.76 0 00-1 .09l-.6.59a.77.77 0 00-.09 1l.58.83a5.15 5.15 0 00-.51 1.24l-1 .18a.76.76 0 00-.64.76v.84a.76.76 0 00.64.76l1 .18a5.15 5.15 0 00.51 1.24l-.58.83a.77.77 0 00.09 1l.6.6a.76.76 0 001 .08l.83-.58a5.5 5.5 0 001.25.52l.17 1a.76.76 0 00.76.64h.86a.78.78 0 00.76-.64l.17-1a5.08 5.08 0 001.25-.52l.81.57a.76.76 0 001-.09l.6-.6a.76.76 0 00.09-1l-.59-.84a5.18 5.18 0 00.52-1.24l1-.18a.76.76 0 00.64-.75v-.85a.78.78 0 00-.64-.77zm-6 3.47a2.29 2.29 0 112.29-2.29 2.29 2.29 0 01-2.32 2.29z" fill="#fff"/><path d="M111.93 180.75l6.28 7.6 10.64-9.35 2.24 2.1s-5.86 9.86-11.42 14.18a2.76 2.76 0 01-3.31 0 44.11 44.11 0 01-9.82-10.4z" fill="#e5b699"/><path d="M136.63 175.82a.48.48 0 00-.59-.06l-1.57 1-.12-.09L136 175a.5.5 0 000-.7.57.57 0 00-.78 0l-1.83 1.64-.17-.13 1.73-2.39a.44.44 0 00-.07-.6.52.52 0 00-.72.05l-2 2.15-.19-.15 1.09-2a.45.45 0 00-.15-.6.53.53 0 00-.72.16l-1.12 1.76s-.4.92-.87 1.91l-.32-1.74a.44.44 0 00-.35-.35.47.47 0 00-.56.41c-.08 1.1 0 4.36-.16 4.58l2.24 2.1 4.34-3.59 1.17-1.1a.41.41 0 00.07-.59z" fill="#e5b699"/><path d="M113.75 182.72l-7.67 7.57-4.17-5.29a5.27 5.27 0 01.61-7.15 5.27 5.27 0 017.78.75z" fill="#e1b846"/><path fill="none" stroke="#d1a73e" strokeMiterlimit="10" strokeWidth=".75" d="M108.75 187.82l-2.67 2.47-4.17-5.34M113.75 182.72l-4-4.8"/><path d="M110.64 164.83l4.22-1.08c2.89 1.69 3.34 6.41 3.34 6.41h-7.35z" fill="#1e2325"/><path fill="#e5b699" d="M112.07 167.98l-2.28 6.77-6.19-2.52 3.43-10.17 5.04 5.92z"/><path d="M110.73 172c0-.12-1.16-4.22-1.16-4.22l2.57 1.18z" fill="#d6a485"/><path d="M113.91 153.92s3.21.53 3.39 4.58c0 0 .09 2.93.19 7.15a3.49 3.49 0 01-4.14 3.55 10.43 10.43 0 01-4.14-1.86l-1.86-1.75c-4.34-4.85-.36-12.62 6.09-11.75z" fill="#e5b699"/><path d="M117 162.7l1.46 1.39a.33.33 0 01-.19.56l-1.46.15z" fill="#e5b699"/><path d="M109.63 161.16s-1.91-9.82 6.57-5.82c0 0-3.28-5.37-10.74-2.12a6.49 6.49 0 00-3.48 4.26c-.47 2.72 1 5 3.46 9.3l2.84-3.3a11.92 11.92 0 011.35-2.32z" fill="#1e2325"/><path d="M106.9 158.28l1.7 4.05c10.86-3.39 5.91-8.47 5.91-8.47s-8.78-2.61-7.61 4.42z" fill="#1e2325"/><path fill="#1e2325" d="M112.36 160.22l-1.53 2.27-1.91-2.66 3.44.39zM112.94 154.39s3.72.62 4.26 3.21c0 0 2.93-3-3.13-4.28-3.6-.75-1.13 1.07-1.13 1.07zM109 163.48s-.7 4.93-.23 6.68l-9.1-.49a17.52 17.52 0 001.82-5.67c.11-1.95-.88-6.4 2.13-9.42l1.5 5.84z"/><path d="M106.61 162.5a2.15 2.15 0 102.31-2 2.14 2.14 0 00-2.31 2zM103.13 172.75a12.57 12.57 0 008.55 2.95l-3.68-4.39-3.62-.76z" fill="#e5b699"/></svg>
</div>
</section>


<section  className="text-center mb-8 mt-16">
    <h1 className="font-semibold text-4xl " >Team
    </h1>
</section>


<section id="team" className="flex mt-24">


    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">

        <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
            <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
                <img src="https://github.com/elateifsara.png"
                     alt=""
                     className="h-full w-full" />
            </div>
    
            <h2 className="mt-4 font-bold text-xl text-center">Sara EL-ATEIF</h2>
            <h6 className="mt-2 text-sm font-medium">Machine Learning engineer</h6>
    
         
    
     
        </div>
    
        <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
            <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
                <img src="https://github.com/fatiima-Ezzahra.png"
                     alt=""
                     className="h-full w-full" />
            </div>
    
            <h2 className="mt-4 font-bold text-xl text-center">Fatima-Ezzahra OUHMID</h2>
            <h6 className="mt-2 text-sm font-medium">Backend Developer</h6>
    
         
    
       
        </div>
    
        <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
            <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
                <img src="https://github.com/Ogbuchi-Ikechukwu.png"
                     alt=""
                     className="h-full w-full" />
            </div>
    
            <h2 className="mt-4 font-bold text-xl text-center">Ikechukwu Nigel Ogbuchi</h2>
            <h6 className="mt-2 text-sm font-medium">Machine Learning Engineer</h6>
    

    
        
        </div>
    
        <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
            <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
                <img src="https://github.com/AbderrahimSoubaiElidrissi.png"
                     alt=""
                     className="h-full w-full" />
            </div>
    
            <h2 className="mt-4 font-bold text-xl text-center">Abderrahim SOUBAI-ELIDRISI</h2>
            <h6 className="mt-2 text-sm font-medium">Cloud Architect</h6>
    
        
         
        </div>
    
    </div>
    
</section>

<section className="text-center mb-8 mt-16">
    <h1 className="font-semibold text-4xl " >Our product
    </h1>
        </section>

        <section id="info" className="flex my-24">

<div className=" flex flex-col items-start mt-8 sm:mt-0 text-center">


    <img className="mx-auto mb-8" src="assets/diag.png" alt="My image" />

    <p>
        Based on image-based functionalities of the OAK-D along with standard Deep Learning techniques such as object detection, semantic segmentation, etc. We will perform food quality classification (i.e. classifying vegetables based on their quality state). Keeping track of <strong>supermarkets (or stores)</strong>  stocked food’s state can help reduce the amount of wasted food and keep the freshness of the existing goods.
    </p>

    <p>
        The end-user solution will be an embeeded system (OAK-D Camera + Raspberry Pi) Connected to the internet to  deliver a realtime data of the system (Store baskets) to servers that will treat and store date to a database cluster and expose an APIs endpoint to supply dashboards for the end-users interfaces 
    </p>

    </div>


    </section>
  
        

<section className="text-center mb-8 mt-16">
    <h1 className="font-semibold text-4xl " >Our product
    </h1>
</section>


<section id="info " className="flex my-24">

<div className=" flex flex-col items-start mt-8 sm:mt-0 text-center">



               <div className="grid gap-6 mb-8 md:grid-cols-2">
              <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                <h4 className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                  Powered by <strong> OAK-D </strong>
                </h4>

                <div id="cf">
          <img className="mx-auto mb-20 h-100"   src="assets/oakd.png" alt="My image" />
        </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                 OAK—D is a spatial AI powerhouse, capable of simultaneously running advanced neural networks while providing depth from two stereo cameras and color information from a single 4K camera in the center.
                </p>
              </div>
              <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                <h4 className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                  Designed for <strong>Africa</strong>
                </h4>
                  <p className="text-gray-600 dark:text-gray-400">
          <img className="mx-auto mb-8"  src="assets/africa.jpg" alt="My image" />
Tria systems aim to solve a critical food problem especially in African countries by optimizing the storage and manipulation of food in supermarkets and big facilities such as hotels and schools...
                </p>
              </div>
            </div>
  
            
    </div>


    </section>
      </main>

      <Footer />
      
    </div>
  )
}
