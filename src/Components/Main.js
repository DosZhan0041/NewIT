import { useEffect, useState } from "react"
import Rewiews from "./Rewiews"
import { IoIosClose } from "react-icons/io";


function Main(){
    const initialTime = { hour: 15, minutes: 22, seconds: 59 };
    const [showForm, setShowForm]= useState(false)
    const [time, setTime] = useState(initialTime); 
    const [data, setdata] = useState({
      name: '',
      phone: '',
      city: '',
      interest: '',
      details: ''
    })

    useEffect(() => {
        const interval = setInterval(() => {
          setTime((prevTime) => {
            let { hour, minutes, seconds } = prevTime;
    
            if (seconds > 0) {
              seconds--;
            } else if (minutes > 0) {
              minutes--;
              seconds = 59;
            } else if (hour > 10) {
              hour--;
              minutes = 59;
              seconds = 59;
            } else {
              return initialTime;
            }
    
            return { hour, minutes, seconds };
          });
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setdata(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://669a61ab9ba098ed61ff6f28.mockapi.io/knewit', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({data})
            });

            if (response.ok) {
                alert('Заявка успешно отправлена!');
                setShowForm(false);
            } else {
                alert('Произошла ошибка при отправке заявки.');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при отправке заявки.');
        }
    };



    return (
        <main>
            <form onSubmit={handleSubmit} className={`form ${showForm? ``: `disable`}`}>
              <IoIosClose onClick={()=>{setShowForm(false)}} className="icon_remove"/>
                <h1>Оставить заявку</h1>
                <p>Заполни эту форму, чтобы пройти бесплатный урок!</p>
                <h3>Начните изучать кодинг уже сегодня!</h3>
                <div className="form_input">
                    <input type="text" placeholder="Имя" value={data.name} name="name" onChange={handleChange}></input>
                    <input type="number" placeholder="Телефон" autoComplete="off" value={data.phone} name="phone" onChange={handleChange}></input>
                    <input type="text" placeholder="Город" autoComplete="off" value={data.city} name="city" onChange={handleChange}></input>
                    <select placeholder="Что вас интересует?" name="interest" value={data.interest} onChange={handleChange}>
                        <option value='Frontend'>Frontend</option>
                        <option value='Python'>Python</option>
                        <option value='Analyse'>Анализ данных</option>
                        <option value='С++'>С++</option>
                        <option value='Java'>Java</option>
                        <option value='Child'>Детские курсы</option>
                        <option value='Start'>Курсы для новичков</option>
                    </select>
                    <input type="text" placeholder="Подробнее" autoComplete="off" value={data.details} name="details" onChange={handleChange}></input>
                </div>
                <button type="submit">Отправить заявку</button>
            </form>
        <nav>
            <div class="nav-left">
                <h1>04:{time.hour.toString().padStart(2, '0')}:
                    {time.minutes.toString().padStart(2, '0')}:
                    {time.seconds.toString().padStart(2, '0')}</h1>
                <h3>скидка 20%, успейте записаться!</h3>
                <p>Посети наш пробный урок, и узнай как стать программистом с нуля!</p>
            </div>
            <div class="nav-right">
                <img src="./Assets/react.png" alt=""/>
                <p>Front-End</p>
                <button class="wh_button"><a href="#">Учебный план</a></button>
                <button class="bl_button" onClick={()=>{setShowForm(true)}}><a href="#">Оставить заявку</a></button>
            </div>
        </nav>
        <aside>
            <div class="aside-left">
                <h1>Knew IT</h1>
                <h3>Knew IT - это первая школа программирования в Казахстане. За 11 лет мы обучили 10000 выпускников.</h3>
                <h4>Наша школа обучает программистов для Kaspi, Qazqom, Samruk, Атамекен, Coca-cola и KCell.</h4>
            </div>
            <div class="aside-right">
                <img src="./Assets/team.jpg" alt=""/>
            </div>
        </aside>
        <Rewiews/>
    </main>
    )
}


export default Main