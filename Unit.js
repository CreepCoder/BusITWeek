class Unit{
	constructor(UnitType){
		if (UnitType === 0){
		this.UnitName = "Spearman";
		this.ShortDescription = "A basic melee infantry unit, which is more effective against Knights.";
		this.GoldCost = 150;
		this.MaxHealth = 400;
		this.MovementAllowance = 3;
		this.AttackPower = [50,75]; // MinimumDamage, MaximumDamage; attack damage is a random value in this range
		this.AttackRange = 1;
		this.TypeModifiers = [1.5, 2, 3]; // SpearmanModifier, ArcherModifier, KnightModifier
		this.RetaliationModifier = 0.75;
		}
		if (UnitType === 1){
		this.UnitName = "Archer";
		this.ShortDescription = "A basic ranged infantry unit, which is more effective against Spearmen.";
		this.GoldCost = 350;
		this.MaxHealth = 200;
		this.MovementAllowance = 3;
		this.AttackPower = [75,100]; // MinimumDamage, MaximumDamage; attack damage is a random value in this range
		this.AttackRange = 3;
		this.TypeModifiers = [3, 1.5, 2]; // SpearmanModifier, ArcherModifier, KnightModifier
		this.RetaliationModifier = 0.25;
		}
		if (UnitType === 2){
		this.UnitName = "Knight";
		this.ShortDescription = "A basic cavalry unit, which is more effective against Archers.";
		this.GoldCost = 500;
		this.MaxHealth = 300;
		this.MovementAllowance = 6;
		this.AttackPower = [25,50]; // MinimumDamage, MaximumDamage; attack damage is a random value in this range
		this.AttackRange = 1;
		this.TypeModifiers = [2, 3, 1.5]; // SpearmanModifier, ArcherModifier, KnightModifier
		this.RetaliationModifier = 0.5;
		}
	}
/* When a unit attacks another unit, it deals it AttackPower, multiplied by the TypeModifier that corresponds to the type of the unit it is attacking. 
Additionally, if the unit's health is between 100-75% of its max HP, it deals 100% of its damage, between 74-50% it deals 75% damage, 
between 49-25% it deals 50% damage, between 24-1% it deals 25% damage. When a unit is attacked by another melee unit (it has an AttackRange of 1), 
it deals retalatoin damage, AFTER losing the health in damage it received. Retaliation is an attack, multiplied by the unit's RetaliationModifier. */
}
