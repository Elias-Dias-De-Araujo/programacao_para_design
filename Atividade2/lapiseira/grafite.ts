class Grafite {
  public thickness: number;
  public hardness: string;
  public size: number;

  public constructor(thickness: number, hardness: string, size: number) {
    this.thickness = thickness;
    this.hardness = hardness;
    this.size = size;
  }

  public usagePerSheet(): number {
    if (this.hardness === "HB") return 1;
    if (this.hardness === "2B") return 2;
    if (this.hardness === "4B") return 4;
    if (this.hardness === "6B") return 6;
    return 0;
  }

  public toString(): string {
    //return "Grafite: " + this.calibre + ":" + this.dureza + ":" + this.tamanho;
    return `${this.thickness}:${this.hardness}:${this.size}`;
  }

  public getThickness(): number {
    return this.thickness;
  }
  public getSize(): number {
    return this.size;
  }
  public getHardness(): string {
    return this.hardness;
  }
  public setSize(value: number): void {
    this.size = value;
  }
  public setHardness(value: string): void {
    this.hardness = value;
  }
  public setThickness(value: number): void {
    this.thickness = value;
  }
}

export default Grafite;
