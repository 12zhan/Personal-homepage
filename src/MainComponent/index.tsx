import Avatar from '../components/Avatar'
import style from './style/index.module.less'
import github from '../assets/github.svg'
import mail from '../assets/mail.svg'
import { introduce } from '../data/message'
export default function Main() {
    return (
        <div className={style.container}>

            <div style={{ width: '100%' }}>
                <Avatar width='200px' height='200px' />

                <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 10 }}>
                    <span className='title'>个人简介</span>
                    <span className='introduce'>
                        {introduce}
                    </span>
                    <div style={{ width: 'fit-content', display: 'flex', flexDirection: 'column', gap: 5 }}>
                        <mdui-button variant="filled">
                            <mdui-icon slot='icon' src={github} />
                            Github
                        </mdui-button>
                        <mdui-button variant="tonal">
                            <mdui-icon slot='icon' src={mail} />
                            QQ邮箱
                        </mdui-button>
                    </div>
                </div>
            </div>



        </div>
    )
}