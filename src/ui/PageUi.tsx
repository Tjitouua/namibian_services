import type { ReactNode } from "react";


interface PageUIProps {
    children?: ReactNode;
    className?: string;
}

const PageUi = ({ children, className }: PageUIProps) => {
    return (
        <div className={`w-full min-h-screen flex flex-col bg-gray-50 ${className}`}>
            {children}
        </div>
    );
}

export default PageUi;