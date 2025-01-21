'use client';
import React, { ReactNode, useState } from 'react';
import Menu from './components/menu/menu';
import Item from './components/item/item';
import styles from './navigation.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import getDeviceType from '@/app/utility/deviceDetection';

const items = {
    game: [{href: "/game", text: "Play"}],
    learn: [{href: "/learn", text: "Story"}, {href:"/learn", text: "Classes"}, {href:"/learn", text: "Races"}, {href:"/learn", text: "World"}],
    github: [{href: "https://github.com/codyroberts/talesofawizard-website/", text: "Website"}, {href:"https://github.com/codyroberts/talesofawizard/", text: "Game"}],
    community: [{href: "https://discord.gg/rjX2JbYAVR", text: "Discord"}, {href: "/", text: "Leaderboards"}],
}

const menus = [
    {header: "Game", items: items.game}, 
    {header: "Learn", items: items.learn}, 
    {header: "Github", items: items.github},
    {header: "Community", items: items.community},
]

const Navigation: React.FC = () => {
    const [open, setOpen] = useState(false);
    const device: String | undefined = getDeviceType();

    const handleBookClick = () => {
        if(device == "Desktop" || device === "Tablet") {
            window.location.href = '/';
        } else {
            setOpen(!open);
        }
    }

    return (
        <div className={styles.container}>
            <div className={`${styles.menus} ${open ? styles.show : ""}`}>
            {menus.map((menu: Menu, menuIndex: number) => {
                return (
                <div  key={menuIndex}>
                    <Menu header={menu.header}>
                        {menu.items.map((item: Item, itemIndex: number) => (
                            <Item key={itemIndex} href={item.href} text={item.text} />
                        ))}
                    </Menu>
                </div>
            )})}
            </div>
            <Link href='/'>
                <Image src="/images/OldBook.png" width={2100} height={2100} alt="Home Button" className={styles.image} onClick={handleBookClick} />
            </Link>
        </div>
    );
};

export default Navigation;