import React from 'react';
import '../styles/cvhtml.css'; 
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  es: {
    name: 'Sebastian Scrosoppi',
    title: 'Fullstack Developer',
    email: 'Email',
    phone: 'Teléfono',
    aboutMe: 'Sobre Mí',
    aboutMeText: 'Soy una persona proactiva, excelente compañero de equipo, organizado y responsable. Disfruto mucho aprender cosas nuevas, y resolver problemáticas diarias del mundo IT. Abierto a nuevas posibilidades.',
    education: 'Educación',
    experience: 'Experiencia Laboral',
    courses: 'Cursos / Habilidades',
    languages: 'Idiomas',
    otherData: 'Otros Datos',
    objective: 'Objetivo',
    objectiveText: 'Mi objetivo laboral consiste en consolidar mi presencia en esta vibrante ciudad, construyendo cimientos sólidos para mi crecimiento tanto personal como profesional. Aspiro a familiarizarme con las últimas tecnologías y métodos de trabajo, buscando siempre la mejora continua y la adaptación a un entorno laboral dinámico.',
    educationList: [
      'Lic. en Cs. de la Computación, Universidad UBA, 2010 - 2017',
      'Bachiller en Bienes y Servicios, Colegio Secundario Técnico N°1 Nuestra Señora del Valle, 2007',
      'Técnico profesional en Informática, Colegio Secundario Técnico N°1 Nuestra Señora del Valle, 2007'
    ],
    experienceList: [
      'SysAdmin, Conecta-Wireless, Mar 2023 - Actualidad',
      'Devop, Cecaitra, Jun 2022 - Nov 2023',
      'Sysadmin, Innovat, May 2013 - Jul 2018',
      'FullStack Developer, Valmex, Jun 2016 - Nov 2023'
    ],
    coursesList: [
      'FullStack Desarrollo Web (JavaScript - NodeJs), Gobierno ciudad de Bs.As. Codo a Codo, Dic 2022',
      'Especialización en React, Gobierno Ciudad Bs.As. Codo a Codo, Jul 2023',
      'Programación de PLC S7-1200 Siemens, Universidad Técnica Nacional - UTN, Sep 2021',
      'CCNA 1,2,3,4, Nuestra Señora del Valle, Dic 2010'
    ],
    languagesList: [
      'Inglés: Nivel Oral Básico, Nivel Escrito Medio. Estudiando actualmente 2024'
    ],
    otherDataText: 'Detalle de experiencia con Linux: Uso diario en pc personal de escritorio. Experiencia en VPS: configuración de servicios(ssh,telnet,sftp,apache,nginx,smtp,dns,nfs,mysql,cups,firewall,proxy,docker,webmin,etc.). Manejo de archivos, compresión, búsqueda, eliminación, etc. Scripting con bash. Manejos de paquetes y librerías. Compilación de kernel. Usuarios y grupos. Herramientas de red. Manejo de procesos. LVM y Raid. Automatización de procesos con GitLab y Jenkins.'
  },
  en: {
    name: 'Sebastian Scrosoppi',
    title: 'Fullstack Developer',
    email: 'Email',
    phone: 'Phone',
    aboutMe: 'About Me',
    aboutMeText: 'I am a proactive person, an excellent team player, organized and responsible. I enjoy learning new things and solving daily IT problems. Open to new possibilities.',
    education: 'Education',
    experience: 'Work Experience',
    courses: 'Courses / Skills',
    languages: 'Languages',
    otherData: 'Other Information',
    objective: 'Objective',
    objectiveText: 'My career goal is to establish myself in this vibrant city, building a solid foundation for my personal and professional growth. I aspire to familiarize myself with the latest technologies and work methods, always seeking continuous improvement and adapting to a dynamic work environment.',
    educationList: [
      'BSc in Computer Science, University UBA, 2010 - 2017',
      'High School Diploma in Goods and Services, Technical High School N°1 Nuestra Señora del Valle, 2007',
      'Professional Technician in IT, Technical High School N°1 Nuestra Señora del Valle, 2007'
    ],
    experienceList: [
      'SysAdmin, Conecta-Wireless, Mar 2023 - Present',
      'Devop, Cecaitra, Jun 2022 - Nov 2023',
      'Sysadmin, Innovat, May 2013 - Jul 2018',
      'FullStack Developer, Valmex, Jun 2016 - Nov 2023'
    ],
    coursesList: [
      'FullStack Web Development (JavaScript - NodeJs), Gobierno ciudad de Bs.As. Codo a Codo, Dec 2022',
      'React Specialization, Gobierno Ciudad Bs.As. Codo a Codo, Jul 2023',
      'PLC S7-1200 Siemens Programming, Universidad Técnica Nacional - UTN, Sep 2021',
      'CCNA 1,2,3,4, Nuestra Señora del Valle, Dec 2010'
    ],
    languagesList: [
      'English: Basic Oral Level, Intermediate Written Level. Currently studying 2024'
    ],
    otherDataText: 'Experience with Linux: Daily use on personal desktop PC. Experience in VPS: service configuration (ssh, telnet, sftp, apache, nginx, smtp, dns, nfs, mysql, cups, firewall, proxy, docker, webmin, etc.). File management, compression, search, deletion, etc. Scripting with bash. Package and library management. Kernel compilation. Users and groups. Network tools. Process management. LVM and Raid. Process automation with GitLab and Jenkins.'
  }
};

const CvHtml = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="cv">
      <p className='tituloG'>{t.name}</p>
      <p className='tituloM'><strong>{t.title}</strong></p>
      
      <p>
        <i className="material-icons" style={{ verticalAlign: 'middle', marginRight: '5px' }}>email</i>
        {t.email}: <a href="mailto:sebaq3@gmail.com">sebaq3@gmail.com</a>
      </p>
      <p>
        <i className="material-icons" style={{ verticalAlign: 'middle', marginRight: '5px' }}>phone</i>
        {t.phone}: +34 647 430 770
      </p>

      <div className="section">
        <h2>{t.aboutMe}</h2>
        <p>{t.aboutMeText}</p>
      </div>

      <div className="section">
        <h2>{t.education}</h2>
        <ul>
          {t.educationList.map((edu, index) => <li key={index}><strong>{edu.split(',')[0]}</strong>, {edu.split(',').slice(1).join(',')}</li>)}
        </ul>
      </div>

      <div className="section">
        <h2>{t.experience}</h2>
        <ul>
          {t.experienceList.map((exp, index) => <li key={index}><strong>{exp.split(',')[0]}</strong>, {exp.split(',').slice(1).join(',')}</li>)}
        </ul>
      </div>

      <div className="section">
        <h2>{t.courses}</h2>
        <ul>
          {t.coursesList.map((course, index) => <li key={index}><strong>{course.split(',')[0]}</strong>, {course.split(',').slice(1).join(',')}</li>)}
        </ul>
      </div>

      <div className="section">
        <h2>{t.languages}</h2>
        <ul>
          {t.languagesList.map((lang, index) => <li key={index}><strong>{lang.split(':')[0]}</strong>: {lang.split(':').slice(1).join(':')}</li>)}
        </ul>
      </div>

      <div className="section">
        <h2>{t.otherData}</h2>
        <p>{t.otherDataText}</p>
      </div>

      <div className="section">
        <h2>{t.objective}</h2>
        <p>{t.objectiveText}</p>
      </div>
    </div>
  );
}

export default CvHtml;
