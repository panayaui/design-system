import {Component, Input, OnInit} from '@angular/core';
import {ITreeNode} from './tree.interface';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

@Component({
  selector: 'p-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {
  @Input() treeNodes: ITreeNode[];
  public treeControl = new NestedTreeControl<ITreeNode>(node => node.children);
  public dataSource = new MatTreeNestedDataSource<ITreeNode>();


  ngOnInit(): void {
    this.dataSource.data = this.treeNodes;
  }

  hasChild = (_: number, node: ITreeNode) => !!node.children && node.children.length > 0;
}
