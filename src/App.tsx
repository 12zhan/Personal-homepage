import Main from './MainComponent'
import style from './css/index.module.less'
import code from '../src/assets/code.svg'
import TechnologyStack from './data/TechnologyStack'

function App() {

  return (
    <div className={style.container}>
      <Main />
      <div style={{ flex: 5, height: '80%' }}>
        <mdui-tabs value="tab-1">
          <mdui-tab value="tab-1">
            <mdui-icon src={code} />
            技术栈&工具
          </mdui-tab>
          <mdui-tab-panel slot="panel" value="tab-1">
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start', gap: 20, padding: 20 }}>

              {
                TechnologyStack.map((item, index) => {
                  return (
                    <mdui-chip key={index} style={{ height: 'fit-content', width: 'fit-content', }}>
                      {item.name}
                      <mdui-icon slot="icon" src={item.icon} style={{ fontSize: '3rem' }}></mdui-icon>
                    </mdui-chip>
                  )
                })
              }


            </div>
          </mdui-tab-panel>
        </mdui-tabs>
      </div>
    </div>
  )
}

export default App
