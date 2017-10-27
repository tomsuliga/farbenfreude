package org.suliga.farbenfreude.model;

import java.util.concurrent.ThreadLocalRandom;

public class GameCell {
	private int color;
	private int owner;
	private int power;
	
	public GameCell() {
		
	}

	public GameCell(int color, int owner, int power) {
		this.color = color;
		this.owner = owner;
		this.power = power;
	}
	
	public GameCell randomize() {
		color = 5;
		owner = 5;
		power = ThreadLocalRandom.current().nextInt(8) + 1;
		
		return this;
	}

	public int getColor() {
		return color;
	}

	public void setColor(int color) {
		this.color = color;
	}

	public int getOwner() {
		return owner;
	}

	public void setOwner(int owner) {
		this.owner = owner;
	}

	public int getPower() {
		return power;
	}

	public void setPower(int power) {
		this.power = power;
	}
	
}
