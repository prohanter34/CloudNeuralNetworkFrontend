import s from "./Cover.module.css"

const Cover = () => {
    return (
        <div className={s.container}>
            <h1>Cloud Neural Network - платформа для обучения нейронным сетям</h1>
            <div className={s.list_container}>

                <h2>Здесь вы можете потренироваться в создании простейших полносвязанных нейронных сетей.</h2>
                <div>Вам будет необходимо:</div>
                <ol className={s.todo_list}>
                    <li>Придумать структуру сети</li>
                    <li>Выбрать способ оптимизации и функцию потерь</li>
                    <li>Подготовить обучающие данные и загрузить их</li>
                    <li>Обучить сеть</li>
                </ol>
                <div>Сеть обучиться на нашей стороне. Вы получите файл с весами и шаблон для его использования.</div>
                <br />
                <div>Чтобы не потерять обученную сеть, зарегистрируйтесь, вы всегда сможете скачать сеть в личном кабинете.</div>

            </div>
        </div>
    )
}

export default Cover