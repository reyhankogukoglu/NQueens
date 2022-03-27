f = open("9-queens.txt", "r")
lines = f.read().split("\n")

boardSolutions = []
solutions = []

for line in lines:
    ourBoard = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
    line = line.split(", ")
    positions = []
    for position in line:
        x = int(position[1])
        y = int(position[3])
        positions.append([x,y])
    solutions.append(positions)
    for position in positions:
        ourBoard[position[0]][position[1]] = 1
    boardSolutions.append(ourBoard)

printArray = []
for solution in range(len(boardSolutions)):
    printVal = ""
    for row in boardSolutions[solution]:
        printVal = printVal + f"{row},\n"
    printArray.append(printVal)

print("let newBoard:number[][] = []")
print("allPossibleBoards = [];")
for printValue in printArray:
    print(f"newBoard = [\n{printValue[:-2]}\n]")
    print(f"allPossibleBoards.push(newBoard);\n")