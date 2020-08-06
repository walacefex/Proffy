import React from 'react';
//styles
import './styles.css';

//image
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem(){
  return( 
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/16948390?s=460&u=2dc75b5d110341e9ed50d84a37fbe2559a1d9113&v=4" alt="walace"/>
        <div>
          <strong>Walace Felix</strong>
          <span>Bootstrap</span>
        </div>
      </header>
      <p>
          Desenvolvedor Front-End. Design UX e UI. Amante de educação e inovação.
          <br/>
          <br/>
          Lorem ipsum, dolor sit amet laborum error quos porro rerum neque obcaecati, id explicabo consequuntur sunt dolor doloribus fuga.
      </p>
      <footer>
        <p>
          Preço/Hora
          <strong> R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>);
}

export default TeacherItem;