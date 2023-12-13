export default function Jatekok() {

    return (


        <div className="container mt-3">

            <h2>Játékok</h2>
            <p>Válassz egy szimpatikus gamet:</p>
            <div className="jatekok">
                <div className="card">
                    <img className="card-img-top" src="https://cdn-icons-png.flaticon.com/512/10199/10199746.png" alt="Card image" />
                    <div className="card-body text-center">
                        <h4 className="card-title">Tic Tac Toe</h4>
                        <p className="card-text"></p>
                        <a href="/tictactoe" className="btn btn-primary">Megtekint</a>
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top" src="https://imgs2.dab3games.com/turn-light-puzzle-game.png" alt="Card image" />
                    <div className="card-body text-center">
                        <h4 className="card-title">LightOn</h4>
                        <p className="card-text"></p>
                        <a href="/lighton" className="btn btn-primary">Megtekint</a>
                    </div>
                </div>

            </div>
        </div>

    )
}