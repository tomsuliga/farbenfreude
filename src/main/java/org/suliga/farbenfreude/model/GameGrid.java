package org.suliga.farbenfreude.model;

public class GameGrid {
	private GameCell[][] cells;
	
	public GameGrid() {
		init();
	}
	
	public void init() {
		cells = new GameCell[20][20];
		
		for (int i=0;i<20;i++) {
			for (int j=0;j<20;j++) {
				cells[i][j] = new GameCell().randomize();;
			}
		}
	}

	public GameCell[][] getCells() {
		return cells;
	}
	
	public GameCell getCell(int col, int row) {
		return cells[col][row];
	}
}
