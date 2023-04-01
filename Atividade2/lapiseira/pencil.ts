import Grafite from "./grafite";

class Pencil {
  //todo
  private thickness: number;
  private tip: Grafite | null;

  public constructor(thickness: number) {
    this.thickness = thickness;
    this.tip = null;
  }

  public hasGrafite(): boolean {
    if (this.tip == null) {
      return false;
    } else {
      return true;
    }
  }

  public insert(grafite: Grafite): boolean {
    if (!this.hasGrafite()) {
      if (grafite.getThickness() == this.thickness) {
        this.tip = grafite;
        return true;
      } else {
        console.log("fail: calibre imcompátivel");
        return false;
      }
    } else {
      console.log("fail: já exite grafite");
      return false;
    }
  }

  public remove(): Grafite | null {
    if (this.hasGrafite()) {
      const aux = this.tip;
      this.tip = null;
      return aux;
    } else {
      console.log("fail: não existe grafite");
      return null;
    }
  }

  writePage(): void {
    if (this.hasGrafite()) {
      if (this.tip != null) {
        if (this.tip.getSize() > 10) {
          const used = this.tip.usagePerSheet();
          this.tip.setSize(this.tip.getSize() - used);
          if (this.tip.getSize() <= 10) {
            this.tip.setSize(10);
            console.log("fail: folha imcompleta");
          }
        } else {
          console.log("fail: tamanho insuficiente");
        }
      }
    } else {
      console.log("fail: não existe gráfite");
    }
  }

  public toString(): string {
    return (
      "calibre: " +
      this.thickness +
      ", grafite: " +
      (this.tip != null ? "[" + this.tip.toString() + "]" : "null")
    );
  }
}

export default Pencil;
