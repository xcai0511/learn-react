// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
//import Profile from './components/profile'
// import Gallery from "@/pages/components/gallery";
import Profile from './qcomps/profile_mistake'
import FirstComp from './qcomps/firstcomp'
import Bio from './qcomps/bios'
import TodoList from "@/pages/qcomps/todos";
import Gallery from "./qcomps/gallery_props"
import PackingList from "@/pages/qcomps/props_item";

export default function Home() {
  return (
    <div className={styles.main}>
        <PackingList/>
    </div>
  )
}
