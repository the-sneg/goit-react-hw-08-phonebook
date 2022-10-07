import s from '../Home/Home.module.css';

export const Home = () => {
  return (
    <>
      <h1 className={s.title}>Wellcome to Phonebook service</h1>
      <p className={s.subTitle}>
        On this site you can save your phone book contacts. All contacts in one
        place! You can open this site on any device, login and see your contacts
        list.
      </p>
    </>
  );
};
