import './LoadingPage.scss'
import closeIcon from '../../assets/icons/close_FILL0_wght400_GRAD0_opsz24.svg';
import { useNavigate } from 'react-router-dom';

function LoadingPage(){
    const navigate = useNavigate();
    const onExitClicked = () => {
        navigate('/');
        return;
    }

    return (<main className='main'>
            <div className='question-page'>
                <button className='question-page__button' onClick={(e)=>{onExitClicked()}}><img src={closeIcon} alt='Close Icon'/></button>
                <section className='question-page-window--loading'>
                    <h2 className='question-page-window__loading'>Loading...</h2>
                </section>
            </div>
        </main>)
}

export default LoadingPage