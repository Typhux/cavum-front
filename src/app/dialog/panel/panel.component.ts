import { AfterViewInit, Component, ComponentFactoryResolver, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DynamicComponent, DynamicData } from 'src/app/panelComponent/dynamic.component';
import { registeredPanelComponent } from 'src/app/panelComponent/registeredPanelComponent';
import { AdDirective } from './ad.directive';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})

export class DialogPanel implements AfterViewInit {
  @ViewChild(AdDirective) adHost: AdDirective;

  public panelComponents = registeredPanelComponent;

  constructor(private componentFactoryResolver : ComponentFactoryResolver, private dialogRef: MatDialogRef<DialogPanel>, @Inject(MAT_DIALOG_DATA) public data: DynamicData) {}

  ngAfterViewInit(): void {
    var componentFactory = this.componentFactoryResolver.resolveComponentFactory<DynamicComponent>(this.panelComponents.find(c => c.name == this.data.component).component);
    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = this.data;
    componentRef.instance.result.subscribe(result => {
      if(result.isTreated == true){
        this.dialogRef.close(result);
      }
    })
  }
}
