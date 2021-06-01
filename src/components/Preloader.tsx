import React, { FC } from 'react';

import { StyledSpinner } from '../styled/componentsStyles/AppStyles';

export const Preloader: FC = () => (
    <>
        <StyledSpinner
            animation="border"
            role="status">
            <span className="sr-only">Загрузка...</span>
        </StyledSpinner>
    </>
);
