  var treeData = [
    {
      "name": "DIEU",
      "parent": "null",
      "type": "circle",
      "page": "DIEU",
      "children": [
        {
          "name": "Analyse",
          "parent": "DIEU",
          "type": "circle",
          "page": "analyse",
          "children": [
            {
              "name": "Analyse réelle",
              "parent": "Analyse",
              "type": "square",
              "page": "anareelle"
            },
            {
              "name": "Analyse \n complexe",
              "parent": "Analyse",
              "type": "square",
              "page": "anacomplexe"
            }
          ]
        },
        {
          "name": "Algèbre",
          "parent": "DIEU",
          "type": "circle",
          "page": "algebre"
        }
      ]
    }
  ];
  
root = treeData[0];
    
update(root);
  
