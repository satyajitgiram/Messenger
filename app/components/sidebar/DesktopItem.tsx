'use client';
import Icon from '@ant-design/icons/lib/components/Icon';
import clsx from 'clsx';
import Link from "next/link";
import { icons } from 'react-icons';

interface DesktopItemProps{
    label:string;
    icon: any;
    href: string;
    onClick?: () => void;
    active?: boolean;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
    label,
    icon,
    href,
    onClick,
    active
}) => {
    const handleClick = () =>{
        if(onClick){
            return onClick();
        }
    };

    return (
        <li onClick={handleClick}>
            <Link href={href}>
                <Icon  className="h-6 w-6 shrink-0" />
                <span>{label}</span>
            </Link>
        </li>
    );
}

export default DesktopItem;