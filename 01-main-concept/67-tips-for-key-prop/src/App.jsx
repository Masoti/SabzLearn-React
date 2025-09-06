import React from 'react'
import User from './components/User/User';

class App extends React.Component {
    
    state = {
        users: [
            {id: 1, name: 'Amin', age: 22},
            {id: 2, name: 'Amir', age: 11},
            {id: 3, name: 'Ali', age: 24},
            {id: 4, name: 'Babak', age: 26},
        ]
    }
    render() {
        return (
            <div>
                {this.state.users.map((user, index) => (
                    <div key={index}>
                        <User { ...user} />
                    </div>
                ))}
            </div>
        )
    }
}

//استفاده کنیم index ها تا انتها تغییر می کنن در نتیجه نباید از index ها حذف یا اضافه بشه   user زمانی که یک یا چندتا از
//استفاده کنیم id و  باید از یک مقدار پایدار مثل 
//هست و جای دیگری از آن استفاده نکنید map مخصوص key prop 
export default App
