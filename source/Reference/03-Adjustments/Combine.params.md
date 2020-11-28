| Setting             | Description                                                                                            |
| :------------------ | :----------------------------------------------------------------------------------------------------- |
| **Method**          |
|                     | *Blend* : Blends the values of the two inputs.                                                         |
|                     | *Add* : Adds Input2 to Input1.                                                                         |
|                     | *Screen*  : Adds Input2 to Input1 without overexposing the output.                                     |
|                     | *Subtract*  : Subtracts Input2 from Input1.                                                            |
|                     | *Multiply*  : Multiplies Input1 by Input2.                                                             |
|                     | *Divide*  : Divides Input1 by Input2.                                                                  |
|                     | *Max*  : Selects the higher of the two inputs.                                                         |
|                     | *Min*  : Selects the lower of the two inputs.                                                          |
|                     | *SqRt*  : The square root of the two combined terrains.                                                |
|                     | *Power* : Uses Input2 to create exponents of Input1.                                                   |
|                     | *Difference* : Creates the difference of the two inputs.                                               |
| **Ratio**           | The ratio applied to the selected method.                                                              |
| **Swap Inputs**     | Switches the two inputs.                                                                               |
| **Separation Mask** | When enabled, creates a separation mask that separates the original elements from the combined output. |
| **Clamp Output**    | Clamp the output between 0..1 values, removing any excess spikes or out-of-bound values.               |
| **Abs**             | When enabled, any value above 0.0 is forced to become 1.0. This is useful for creating hard boundaries out of masks. |
