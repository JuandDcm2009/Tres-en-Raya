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
            if positions[a] == positions[b] == positions[c] != 0:
                print(combo)
                print(f"The winner is {positions[a]}")
                return combo 
        return [0, 0, 0]

class Api:
    
    def setPosition(self, position):
        global positions, turno
        if positions[position] == 0:
            if turno == 1:
                positions[position] = turno
                turno = 2
                print(positions)
                return {"text":"X", "win": getWinner()}
            else:
                positions[position] = turno
                turno = 1
                print(positions)
                return {"text":"O", "win": getWinner()}
        else:
            if positions[position] == 1:
                return {"text":"X", "win": getWinner()}
            elif positions[position] == 2:
                return {"text":"O", "win": getWinner()}
    def resetPosition(self):
         global positions, turno
         positions = [None, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
         turno = 1
api = Api()
webview.create_window('TicTacToe', 'index.html', js_api=api)
webview.start(debug=True)