import Layout from '../../components/Layout';
import axios from 'axios';
import { API } from '../../config';
import { getCookie } from '../../helpers/auth';
import withUser from '../withUser';

const User = ({ user, token }) => <Layout>
        {JSON.stringify(user)} <p> </p> {JSON.stringify(token)}
    </Layout>;

export default withUser(User);
