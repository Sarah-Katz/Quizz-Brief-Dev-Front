import LoginButton from '../../components/LoginButton/loginButton';
// import axios from 'axios';
import LoginRegister from '../../components/LoginRegister/LoginRegister';
import NavMenu from '../../components/NavMenu/NavMenu'

export default function Profile() {
    const isLogged = localStorage.getItem('isLogged');
    const userID = localStorage.getItem('userID');
    const userName = localStorage.getItem('userName');

    // const getUserParties = async userID => {
    //     try {
    //       const response = await axios.get(`http://localhost:8000/api/parties?user_id=${userID}`);
    //       return response.data;
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
      



    //   console.log(getUserParties(userID));

    if (isLogged) {
        return (
            <div>
                <NavMenu />
                <div className='profile-container'>
                    <h2 className='profile-username'>{userName}</h2>
                </div>
                <LoginRegister />
            </div>
        );
    } else {
        return (
            <div>
                <NavMenu />
                <div className='profile-container'>
                    <LoginButton />
                </div>
                <LoginRegister />
            </div>
        );
    }
}