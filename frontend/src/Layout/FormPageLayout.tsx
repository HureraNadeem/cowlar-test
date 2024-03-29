import { FC, ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const FormPageLayout: FC<Props> = ({ children }) => {
    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 bg-bridge bg-cover bg-fixed brightness-50"></div>
            <div className="relative">{children}</div>
        </div>
    );
};

export default FormPageLayout;
