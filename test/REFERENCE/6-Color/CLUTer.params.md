# [Pre-Process](#tab/tabid-a)
| Setting              | Values      | Description                                                  |
| :------------------- | :---------- | :----------------------------------------------------------- |
| **Input Noise**      | 0 - 100% | Introduces noise to the incoming grayscale map.              |
| **Input Clarity**    | On / Off    | Applies localized contrast enhancements to the incoming map. |
| **Input Auto Level** | On / Off    | Applies an autolevels filter to the incoming map.            |
| **Reverse**          | On / Off    | Reverses the mapping of the gradient.                        |

# [Post-Process](#tab/tabid-b)
| Setting               | Values      | Description                                                    |
| :-------------------- | :---------- | :------------------------------------------------------------- |
| **Color Noise**       | 0 - 100% | Introduces minor color distortions to the map.                 |
| **Output Clarity**    | On / Off    | Applies localized contrast enhancements to the output texture. |
| **Output Auto Level** | On / Off    | Applies an autolevels filter to the output texture.            |



> [!TIP]
> You can use **Input Clarity** instead of interjecting an Autolevels node to the graph.

In this example, a @flow is mapped by @CLUTer to create basic texture map.

![CLUTer](../../images/CLUT-sample2.png)

For general information on creating color textures, see @Color-Production.

***

<!--examples-->
