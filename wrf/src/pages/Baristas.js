import "./Baristas.css"
function Baristas() {
    return (
        <div className="team-container">
            <h1 className="team-title">// НАША КОМАНДА //</h1>
            
            <div className="team-grid">
                {/* JETT */}
                <div className="barista-card" data-agent="jett">
                    <div className="agent-badge">DUELIST // 01</div>
                    <h2>Jett (Джетт)</h2>
                    <div className="role">Шеф-бариста</div>
                    <p className="desc">Её способность «Вихрь» мгновенно взбивает молоко в идеальную глянцевую пену без единого пузырька. «Попутный ветер» позволяет отдавать заказы со скоростью света. Она буквально управляет потоками воздуха, создавая самый воздушный латте-арт в городе.</p>
                    <div className="signature-drink">
                        <span className="drink-label">ФИРМЕННЫЙ НАПИТОК:</span>
                        <h3>«Попутный ветер» (Tailwind Cold Brew)</h3>
                        <p>Ледяной колд-брю с мятным сиропом и взрывной карамелью. Заряжает энергией на сверхзвуковую скорость.</p>
                    </div>
                </div>

                {/* CYPHER */}
                <div className="barista-card" data-agent="cypher">
                    <div className="agent-badge">SENTINEL // 02</div>
                    <h2>Cypher (Сайфер)</h2>
                    <div className="role">Шеф-контроль и рецептура</div>
                    <p className="desc">Благодаря «Камере» и «Растяжкам» Сайфер видит кофейню насквозь: он знает, когда вы войдете, и начинает варить ваш любимый напиток. Его «Киберклетка» изолирует аромат зерна при помоле, не давая выветриться ни одной нотке вкуса.</p>
                    <div className="signature-drink">
                        <span className="drink-label">ФИРМЕННЫЙ НАПИТОК:</span>
                        <h3>«Нейрокража» (Spy Espresso)</h3>
                        <p>Ристретто с каплей тёмного шоколада и секретным экстрактом черного чеснока. Раскрывает скрытые грани вкуса.</p>
                    </div>
                </div>

                {/* VIPER */}
                <div className="barista-card" data-agent="viper">
                    <div className="agent-badge">CONTROLLER // 03</div>
                    <h2>Viper (Вайпер)</h2>
                    <div className="role">Главный алхимик бара</div>
                    <p className="desc">Её «Химическая завеса» — это уникальная система фильтрации, которая очищает воду до молекулярного уровня. Вайпер использует свои знания токсинов и газов для идеальной экстракции кофе под давлением. Её «Гнездо гадюки» окутывает бар фирменным густым ароматом свежеобжаренных зерен.</p>
                    <div className="signature-drink">
                        <span className="drink-label">ФИРМЕННЫЙ НАПИТОК:</span>
                        <h3>«Змеиный укус» (Toxic Matcha Tonic)</h3>
                        <p>Насыщенный тоник с зеленой матчей, соком лайма и неоновым мятным сиропом. Бодрит, как настоящий антидот от усталости.</p>
                    </div>
                </div>

                {/* REYNA */}
                <div className="barista-card" data-agent="reyna">
                    <div className="agent-badge">DUELIST // 04</div>
                    <h2>Reyna (Рейна)</h2>
                    <div className="role">Королева тёмной обжарки</div>
                    <p className="desc">Используя «Поглощение», Рейна забирает утреннюю сонливость гостей и превращает её в чистую энергию для бара. А её ультимейт «Императрица» пробуждает в ней невероятную концентрацию, позволяя варить безупречный, максимально крепкий эспрессо ручной прессовки.</p>
                    <div className="signature-drink">
                        <span className="drink-label">ФИРМЕННЫЙ НАПИТОК:</span>
                        <h3>«Злобный взгляд» (Empress Mokka)</h3>
                        <p>Густой шоколад, двойной эспрессо, кайенский перец и фиолетовые взбитые сливки. Возвращает к жизни после любого тяжелого раунда.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Baristas;
