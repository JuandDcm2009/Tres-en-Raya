import webview
turno = 1
positions = [None, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
combinaciones = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], # Combinaciones Horizonatales
    [1, 4, 7], [2, 5, 8], [3, 6, 9], # Combinaciones Verticales
    [1, 5, 9], [3, 5, 7]             # Combinaciones Diagonales
]

def getWinner():
        global combinaciones, positions
        for combo in combinaciones:
            a, b, c = combo
            if positions[a] == positions[b] == positions[c] != " ":
                if positions[a] != 0:
                    print(f"The winner is {positions[a]}")
        return None

class Api:
    
    def setPosition(self, position):
        global positions, turno
        if positions[position] == 0:
            if turno == 1:
                positions[position] = turno
                turno = 2
                print(positions)
                getWinner()
                return "X"
            else:
                positions[position] = turno
                turno = 1
                print(positions)
                getWinner()
                return "O"
        else:
            if positions[positions] == 1:
                return "X"
            elif positions[positions] == 2:
                return "O"
    
api = Api()
webview.create_window('TicTacToe', 'index.html', js_api=api)
webview.start(debug=True)