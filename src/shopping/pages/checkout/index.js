import React from 'react';
import ConfirmOrders from './component/confim';
import PaymentOrders from './component/payment';
import LayoutComponent from '../../components/layout';
import * as reselect from '../login/reselect/login-reselect';
import { isLogin } from '../../services/login_service';
import { useSelector } from 'react-redux';
import { createStructuredSelector} from 'reselect';

const CheckOut = () => {
    const { token } = useSelector(createStructuredSelector({
        token: reselect.getTokenLoginUser//getTokenLoginUser
    }));
    const login = isLogin(token);
    return(
        <>
            <LayoutComponent>
                { login ? <PaymentOrders/> : <ConfirmOrders/>}
            </LayoutComponent>
        </>
    )
}
export default React.memo(CheckOut);